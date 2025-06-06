export const description = `
Validation tests for subgroupShuffle, subgroupShuffleXor, subgroupShuffleUp, and subgroupShuffleDown.
`;

import { makeTestGroup } from '../../../../../../common/framework/test_group.js';
import { keysOf, objectsToRecord } from '../../../../../../common/util/data_tables.js';
import {
  Type,
  elementTypeOf,
  kAllScalarsAndVectors,
  isConvertible,
} from '../../../../../util/conversion.js';
import { ShaderValidationTest } from '../../../shader_validation_test.js';

export const g = makeTestGroup(ShaderValidationTest);

const kOps = [
  'subgroupShuffle',
  'subgroupShuffleXor',
  'subgroupShuffleUp',
  'subgroupShuffleDown',
] as const;

g.test('requires_subgroups')
  .desc('Validates that the subgroups feature is required')
  .params(u => u.combine('enable', [false, true] as const).combine('op', kOps))
  .fn(t => {
    const wgsl = `
${t.params.enable ? 'enable subgroups;' : ''}
fn foo() {
  _ = ${t.params.op}(0, 0);
}`;

    t.expectCompileResult(t.params.enable, wgsl);
  });

const kStages: Record<string, (op: string) => string> = {
  constant: (op: string) => {
    return `
enable subgroups;
@compute @workgroup_size(16)
fn main() {
  const x = ${op}(0, 0);
}`;
  },
  override: (op: string) => {
    return `
enable subgroups
override o = ${op}(0, 0);`;
  },
  runtime: (op: string) => {
    return `
enable subgroups;
@compute @workgroup_size(16)
fn main() {
  let x = ${op}(0, 0);
}`;
  },
};

g.test('early_eval')
  .desc('Ensures the builtin is not able to be compile time evaluated')
  .params(u => u.combine('stage', keysOf(kStages)).combine('op', kOps))
  .fn(t => {
    const code = kStages[t.params.stage](t.params.op);
    t.expectCompileResult(t.params.stage === 'runtime', code);
  });

g.test('param2_early_eval')
  .desc('Ensures id/delta/mask parameters must be in the range [0, 128) for const and override')
  .params(u =>
    u
      .combine('op', kOps)
      .combine('value', [-1, 0, 127, 128] as const)
      .filter(t => {
        // Only subgroupShuffle supports an i32 parameter.
        return t.op === 'subgroupShuffle' || t.value !== -1;
      })
      .beginSubcases()
      .combine('stage', ['constant', 'override', 'runtime'] as const)
  )
  .fn(t => {
    let arg = `const_param`;
    if (t.params.stage === 'override') {
      arg = `override_param`;
    } else if (t.params.stage === 'runtime') {
      arg = `let_param`;
    }

    const type = t.params.value === -1 ? `i32` : `u32`;

    const wgsl = `
enable subgroups;

const const_param : ${type} = ${t.params.value};
override override_param : ${type} = 0;

fn foo() {
  let let_param : ${type} = ${t.params.value};
  _ = ${t.params.op}(0, ${arg});
}`;

    const value_ok = t.params.value >= 0 && t.params.value < 128;
    const compile_expect = value_ok || t.params.stage !== 'constant';
    const pipeline_expect = value_ok || t.params.stage !== 'override';
    t.expectCompileResult(compile_expect, wgsl);
    if (compile_expect) {
      const constants: Record<string, number> = {};
      constants['override_param'] = t.params.value;
      t.expectPipelineResult({
        expectedResult: pipeline_expect,
        code: wgsl,
        constants,
        reference: [],
        statements: ['foo();'],
      });
    }
  });

g.test('must_use')
  .desc('Tests that the builtin has the @must_use attribute')
  .params(u => u.combine('must_use', [true, false] as const).combine('op', kOps))
  .fn(t => {
    const wgsl = `
enable subgroups;
@compute @workgroup_size(16)
fn main() {
  ${t.params.must_use ? '_ = ' : ''}${t.params.op}(0, 0);
}`;

    t.expectCompileResult(t.params.must_use, wgsl);
  });

const kTypes = objectsToRecord(kAllScalarsAndVectors);

g.test('data_type')
  .desc('Validates data parameter type')
  .params(u => u.combine('type', keysOf(kTypes)).combine('op', kOps))
  .fn(t => {
    const type = kTypes[t.params.type];
    let enables = `enable subgroups;\n`;
    if (type.requiresF16()) {
      enables += `enable f16;`;
    }
    const wgsl = `
${enables}
@compute @workgroup_size(1)
fn main() {
  _ = ${t.params.op}(${type.create(0).wgsl()}, 0);
}`;

    const eleType = elementTypeOf(type);
    t.expectCompileResult(eleType !== Type.bool, wgsl);
  });

g.test('return_type')
  .desc('Validates return type')
  .params(u =>
    u
      .combine('retType', keysOf(kTypes))
      .filter(t => {
        const type = kTypes[t.retType];
        const eleType = elementTypeOf(type);
        return eleType !== Type.abstractInt && eleType !== Type.abstractFloat;
      })
      .combine('op', kOps)
      .combine('paramType', keysOf(kTypes))
  )
  .fn(t => {
    const retType = kTypes[t.params.retType];
    const paramType = kTypes[t.params.paramType];
    let enables = `enable subgroups;\n`;
    if (retType.requiresF16() || paramType.requiresF16()) {
      enables += `enable f16;`;
    }
    const wgsl = `
${enables}
@compute @workgroup_size(1)
fn main() {
  let res : ${retType.toString()} = ${t.params.op}(${paramType.create(0).wgsl()}, 0);
}`;

    // Can't just use isConvertible since functions must concretize the parameter
    // type before examining the whole statement.
    const eleParamType = elementTypeOf(paramType);
    const eleRetType = elementTypeOf(retType);
    let expect = paramType === retType && eleRetType !== Type.bool;
    if (eleParamType === Type.abstractInt) {
      expect = eleRetType === Type.i32 && isConvertible(paramType, retType);
    } else if (eleParamType === Type.abstractFloat) {
      expect = eleRetType === Type.f32 && isConvertible(paramType, retType);
    }
    t.expectCompileResult(expect, wgsl);
  });

g.test('param2_type')
  .desc('Validates shuffle parameter type')
  .params(u => u.combine('type', keysOf(kTypes)).combine('op', kOps))
  .fn(t => {
    const type = kTypes[t.params.type];
    let enables = `enable subgroups;\n`;
    if (type.requiresF16()) {
      enables += `enable f16;`;
    }
    const wgsl = `
${enables}
@compute @workgroup_size(1)
fn main() {
  _ = ${t.params.op}(0, ${type.create(0).wgsl()});
}`;

    const expect =
      isConvertible(type, Type.u32) || (type === Type.i32 && t.params.op === 'subgroupShuffle');
    t.expectCompileResult(expect, wgsl);
  });

g.test('stage')
  .desc('validates builtin is only usable in the correct stages')
  .params(u => u.combine('stage', ['compute', 'fragment', 'vertex'] as const).combine('op', kOps))
  .fn(t => {
    const compute = `
@compute @workgroup_size(1)
fn main() {
  foo();
}`;

    const fragment = `
@fragment
fn main() {
  foo();
}`;

    const vertex = `
@vertex
fn main() -> @builtin(position) vec4f {
  foo();
  return vec4f();
}`;

    const entry = { compute, fragment, vertex }[t.params.stage];
    const wgsl = `
enable subgroups;
fn foo() {
  _ = ${t.params.op}(0, 0);
}

${entry}
`;

    t.expectCompileResult(t.params.stage !== 'vertex', wgsl);
  });

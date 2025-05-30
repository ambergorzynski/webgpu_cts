export const description = `
Execution Tests for vector component selection expressions
`;

import { makeTestGroup } from '../../../../../../common/framework/test_group.js';
import { AllFeaturesMaxLimitsGPUTest } from '../../../../../gpu_test.js';
import { ScalarValue, Type, VectorValue, f32 } from '../../../../../util/conversion.js';
import { allInputSources, basicExpressionBuilder, run } from '../../expression.js';

export const g = makeTestGroup(AllFeaturesMaxLimitsGPUTest);

/** @returns the full permutation of component indices used to component select a vector of width 'n' */
function indices(n: number) {
  const out: number[][] = [];
  for (let width = 1; width < n; width++) {
    let generate = (swizzle: number[]) => {
      out.push(swizzle);
    };
    for (let i = 0; i < width; i++) {
      const next = generate;
      generate = (swizzle: number[]) => {
        for (let j = 0; j < width; j++) {
          next([...swizzle, j]);
        }
      };
    }
    generate([]);
  }
  return out;
}

g.test('concrete_scalar')
  .specURL('https://www.w3.org/TR/WGSL/#vector-access-expr')
  .desc(`Test vector component selection of concrete vectors`)
  .params(u =>
    u
      .combine('inputSource', allInputSources)
      .combine('elementType', ['i32', 'u32', 'f32', 'f16', 'bool'] as const)
      .combine('width', [2, 3, 4] as const)
      .combine('components', ['rgba', 'xyzw'] as const)
      .beginSubcases()
      .expand('indices', u => indices(u.width))
  )
  .fn(async t => {
    if (t.params.elementType === 'f16') {
      t.skipIfDeviceDoesNotHaveFeature('shader-f16');
    }
    const elementType = Type[t.params.elementType];
    const vectorType = Type.vec(t.params.width, elementType);
    const elementValues =
      t.params.elementType === 'bool' ? (i: number) => i & 1 : (i: number) => (i + 1) * 10;
    const elements: ScalarValue[] = [];
    for (let i = 0; i < t.params.width; i++) {
      elements.push(elementType.create(elementValues(i)));
    }
    const result = (() => {
      if (t.params.indices.length === 1) {
        return { type: elementType, value: elementType.create(elementValues(0)) };
      } else {
        const vec = Type.vec(t.params.indices.length, elementType);
        return { type: vec, value: vec.create(t.params.indices.map(i => elementValues(i))) };
      }
    })();

    const components = t.params.indices.map(i => t.params.components[i]).join('');
    await run(
      t,
      basicExpressionBuilder(ops => `${ops[0]}.${components}`),
      [vectorType],
      result.type,
      t.params,
      [{ input: [new VectorValue(elements)], expected: result.value }]
    );
  });

g.test('abstract_scalar')
  .specURL('https://www.w3.org/TR/WGSL/#vector-access-expr')
  .desc(`Test vector component selection of abstract numeric vectors`)
  .params(u =>
    u
      .combine('elementType', ['abstract-int', 'abstract-float'] as const)
      .combine('width', [2, 3, 4] as const)
      .combine('components', ['rgba', 'xyzw'] as const)
      .beginSubcases()
      .expand('indices', u => indices(u.width))
  )
  .fn(async t => {
    const elementType = Type[t.params.elementType];
    const vectorType = Type.vec(t.params.width, elementType);
    const elementValues = (i: number) => (i + 1) * 0x100000000;
    const elements: ScalarValue[] = [];
    for (let i = 0; i < t.params.width; i++) {
      elements.push(elementType.create(elementValues(i)));
    }
    const result = (() => {
      if (t.params.indices.length === 1) {
        return { type: Type.f32, value: f32(elementValues(0) / 0x100000000) };
      } else {
        const vec = Type.vec(t.params.indices.length, Type.f32);
        return {
          type: vec,
          value: vec.create(t.params.indices.map(i => elementValues(i) / 0x100000000)),
        };
      }
    })();

    const components = t.params.indices.map(i => t.params.components[i]).join('');
    await run(
      t,
      basicExpressionBuilder(ops => `${ops[0]}.${components} / 0x100000000`),
      [vectorType],
      result.type,
      { inputSource: 'const' },
      [{ input: [new VectorValue(elements)], expected: result.value }]
    );
  });

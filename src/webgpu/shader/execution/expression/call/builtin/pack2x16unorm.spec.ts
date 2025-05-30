export const description = `
Converts two normalized floating point values to 16-bit unsigned integers, and then combines them into one u32 value.
Component e[i] of the input is converted to a 16-bit unsigned integer value
⌊ 0.5 + 65535 × min(1, max(0, e[i])) ⌋ which is then placed in
bits 16 × i through 16 × i + 15 of the result.
`;

import { makeTestGroup } from '../../../../../../common/framework/test_group.js';
import { AllFeaturesMaxLimitsGPUTest } from '../../../../../gpu_test.js';
import { kValue } from '../../../../../util/constants.js';
import { f32, pack2x16unorm, u32, vec2, Type } from '../../../../../util/conversion.js';
import { quantizeToF32, vectorF32Range } from '../../../../../util/math.js';
import { Case } from '../../case.js';
import { allInputSources, run } from '../../expression.js';

import { builtin } from './builtin.js';

export const g = makeTestGroup(AllFeaturesMaxLimitsGPUTest);

g.test('pack')
  .specURL('https://www.w3.org/TR/WGSL/#pack-builtin-functions')
  .desc(
    `
@const fn pack2x16unorm(e: vec2<f32>) -> u32
`
  )
  .params(u => u.combine('inputSource', allInputSources))
  .fn(async t => {
    const makeCase = (x: number, y: number): Case => {
      x = quantizeToF32(x);
      y = quantizeToF32(y);
      return { input: [vec2(f32(x), f32(y))], expected: u32(pack2x16unorm(x, y)) };
    };

    // Returns a value normalized to [0, 1].
    const normalizeF32 = (n: number): number => {
      return n > 0 ? n / kValue.f32.positive.max : n / kValue.f32.negative.min;
    };

    const cases: Array<Case> = vectorF32Range(2).flatMap(v => {
      return [
        makeCase(...(v as [number, number])),
        makeCase(...(v.map(normalizeF32) as [number, number])),
      ];
    });

    await run(t, builtin('pack2x16unorm'), [Type.vec2f], Type.u32, t.params, cases);
  });

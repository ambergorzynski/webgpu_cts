export const description = `Example mutant test 3`;

import { makeTestGroup } from '../../common/framework/test_group.js';
import { GPUTest } from '../gpu_test.js';
import { checkElementsEqual } from '../util/check_contents.js';

export const g = makeTestGroup(GPUTest);

g.test('mutant_killing_test_example_3')
  .desc(`Test that exercises floating point operations`)
  .fn(async t => {
    const code = `
    struct g {
    a: f32,
    }
    struct StorageBuffer {
        a: f32,
    }
    @group(0)
    @binding(1)
    var<storage, read_write> s_output: StorageBuffer;
    var<private> n: array<g, 2>;
    fn f(v: f32) -> f32 {
        return select(v, 10f, (abs(v) < 1f));
    }
    @compute
    @workgroup_size(1)
    fn main() {
        let o = n[0];
        s_output = StorageBuffer(f(min(f32(), f(sign(f(o.a - 1f))))));
    }
    `;
    // Corresponds to -1 in f32 representation
    const expectedArray = new Uint8Array([0, 0, 128, 191]);

    const pipeline = t.device.createComputePipeline({
      layout: 'auto',
      compute: {
        module: t.device.createShaderModule({
          code,
        }),
        entryPoint: 'main',
      },
    });

    const outputBuffer = t.makeBufferWithContents(
      expectedArray,
      GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST
    );

    const bg = t.device.createBindGroup({
      layout: pipeline.getBindGroupLayout(0),
      entries: [
        {
          binding: 1,
          resource: {
            buffer: outputBuffer,
          },
        },
      ],
    });

    const encoder = t.device.createCommandEncoder();
    const pass = encoder.beginComputePass();
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bg);
    pass.dispatchWorkgroups(1, 1, 1);
    pass.end();
    t.queue.submit([encoder.finish()]);

    const bufferReadback = await t.readGPUBufferRangeTyped(outputBuffer, {
      srcByteOffset: 0,
      type: Uint8Array,
      typedLength: expectedArray.length,
      method: 'copy',
    });
    const got: Uint8Array = bufferReadback.data;

    t.expectOK(checkElementsEqual(got, expectedArray));
  });


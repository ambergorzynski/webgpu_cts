export const description = `Example mutant test 2`;

import { makeTestGroup } from '../../common/framework/test_group.js';
import { GPUTest } from '../gpu_test.js';
import { checkElementsEqual } from '../util/check_contents.js';

export const g = makeTestGroup(GPUTest);

g.test('mutant_killing_test_example_2')
  .desc(`Test that exercises floating point operations`)
  .fn(async t => {
    const code = `
    struct StorageBuffer {
        a: f32,
    }
    @group(0)
    @binding(1)
    var<storage, read_write> s_output: StorageBuffer;
    fn f(v: f32) -> f32 {
        return select(v, 10f, (abs(v) < 1f));
    }
    @compute
    @workgroup_size(1) 
    fn main() {
        s_output = StorageBuffer(f(ceil(f(-1495f - 823f))));
    } 
    `;
    // Corresponds to -2318 in f32 representation 
    const expectedArray = new Uint8Array([0, 224, 16, 197]);

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


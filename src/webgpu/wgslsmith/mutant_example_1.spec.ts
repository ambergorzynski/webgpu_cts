export const description = `Example mutant test 1`;

import { makeTestGroup } from '../../common/framework/test_group.js';
import { GPUTest } from '../gpu_test.js';
import { checkElementsEqual } from '../util/check_contents.js';

export const g = makeTestGroup(GPUTest);

g.test('mutant_killing_test_example_1')
  .desc(`Test that exercises SPIR-V structured control flow`)
  .fn(async t => {
    const code = `
    struct StorageBuffer {
        a: i32,
    }
    @group(0)
    @binding(1)
    var<storage, read_write> s_output: StorageBuffer;
    fn f() -> i32 {
        switch (1i) {
            case 2i: {
                switch (1i) {
                    case 1i: {
                        return -400i;
                    } 
                    default: {
                    }
                }
                let v = 1i;
            }
            default: {
            }
        }
        return 1i;
    }
    @compute
    @workgroup_size(1)
    fn main() {
        s_output = StorageBuffer(f());
    }
    `;
    // Corresponds to 1 in i32 representation 
    const expectedArray = new Uint8Array([1, 0, 0, 0]);

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


export const description = `Test WGSLsmith compute shaders`;

import { makeTestGroup } from '../../common/framework/test_group.js';
import { GPUTest } from '../gpu_test.js';
import { checkElementsEqual } from '../util/check_contents.js';

export const g = makeTestGroup(GPUTest);

g.test('wgslsmith_test_5')
  .desc(`Test a WGSLsmith compute shader`)
  .fn(async t => {
    const code = `
    struct UniformBuffer {
        a: i32,
    }
    struct StorageBuffer {
        b: f32,
    }
    @group(0)
    @binding(0)
    var<uniform> u_input: UniformBuffer;
    @group(0)
    @binding(1)
    var<storage, read_write> s_output: StorageBuffer;

    fn func_3() -> f32 {
        switch (1i) {
            case 2i: {
                switch (1i) {
                    case 1i: {
                        return -400f;
                    }
                    default: {
                    }
                }
                let v = 1i;
            }
            default: {
            }
        }
        return 1f;
    }

    @compute
    @workgroup_size(1)
    fn main() {
        _ = u_input.a;
        let v2 = func_3();
        s_output = StorageBuffer(v2);
    }
    `;
    const inputArray = new Uint8Array([144, 246, 221, 216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    // Corresponds to 1 in f32 representation 
    const expectedArray = new Uint8Array([0, 0, 128, 63]);

    const pipeline = t.device.createComputePipeline({
      layout: 'auto',
      compute: {
        module: t.device.createShaderModule({
          code,
        }),
        entryPoint: 'main',
      },
    });

    const inputBuffer = t.makeBufferWithContents(
      inputArray,
      GPUBufferUsage.COPY_SRC | GPUBufferUsage.UNIFORM 
    );

    const outputBuffer = t.makeBufferWithContents(
      expectedArray,
      GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST
    );

    const bg = t.device.createBindGroup({
      layout: pipeline.getBindGroupLayout(0),
      entries: [
        {
          binding: 0,
          resource: {
            buffer: inputBuffer,
          },
        },
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

    console.log(got);

    t.expectOK(checkElementsEqual(got, expectedArray));
  });


export const description = `Test WGSLsmith compute shaders`;

import { makeTestGroup } from '../../common/framework/test_group.js';
import { GPUTest } from '../gpu_test.js';
import { checkElementsEqual } from '../util/check_contents.js';

export const g = makeTestGroup(GPUTest);

g.test('wgslsmith_test_1')
  .desc(`Test a WGSLsmith compute shader`)
  .fn(async t => {
    const code = `
    struct UniformBuffer {
        a: i32,
    }
    struct StorageBuffer {
        a: f32,
    }
    @group(0)
    @binding(0)
    var<uniform> u_input: UniformBuffer;
    @group(0)
    @binding(1)
    var<storage, read_write> s_output: StorageBuffer;
    fn f(v: f32) -> f32 {
        return select(v, 10f, abs(v) < 1f);
    }
    @compute
    @workgroup_size(1)
    fn main() {
        let v = u_input.a;
        s_output = StorageBuffer(f(min(-936f, 943f)));
    }
    `;
    const inputArray = new Uint8Array([243, 132, 203, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const expectedArray = new Uint8Array([0, 0, 106, 196]);

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


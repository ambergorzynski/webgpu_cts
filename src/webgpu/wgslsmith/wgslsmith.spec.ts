export const description = `Test WGSLsmith compute shaders`;

// There are many many more shaders executed in other tests.

import { makeTestGroup } from '../../common/framework/test_group.js';
import { GPUTest } from '../gpu_test.js';
import { checkElementsEqual } from '../util/check_contents.js';
import { shaderCode } from './shader.js'

export const g = makeTestGroup(GPUTest);

g.test('basic_compute_wgslsmith')
  .desc(`Test a trivial WGSLsmith compute shader`)
  .fn(async t => {
    const code = shaderCode;

    const pipeline = t.device.createComputePipeline({
      layout: 'auto',
      compute: {
        module: t.device.createShaderModule({
          code,
        }),
        entryPoint: 'main',
      },
    });

    const buffer = t.makeBufferWithContents(
      new Uint32Array([0, 0, 0, 0]),
      GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST
    );

    const bg = t.device.createBindGroup({
      layout: pipeline.getBindGroupLayout(0),
      entries: [
        {
          binding: 0,
          resource: {
            buffer,
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

    const bufferReadback = await t.readGPUBufferRangeTyped(buffer, {
      srcByteOffset: 0,
      type: Uint32Array,
      typedLength: 4,
      method: 'copy',
    });
    const got: Uint32Array = bufferReadback.data;
    const expected = new Uint32Array([1, 2, 3, 42]);

    t.expectOK(checkElementsEqual(got, expected));
  });


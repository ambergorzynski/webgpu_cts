export const description = `Test WGSLsmith compute shaders`;

import { makeTestGroup } from '../../common/framework/test_group.js';
import { GPUTest } from '../gpu_test.js';
import { checkElementsEqual } from '../util/check_contents.js';

import { shaderCode, input, expected } from './shader_wgslsmith.js'

export const g = makeTestGroup(GPUTest);

g.test('basic_compute_wgslsmith')
  .desc(`Test a trivial WGSLsmith compute shader`)
  .fn(async t => {
    const code = shaderCode;
    const inputArray = new Uint8Array(input);
    const expectedArray = new Uint8Array(expected);

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


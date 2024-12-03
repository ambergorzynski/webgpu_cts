#!/bin/sh

# The command must be run from the CTS root folder
# The content of the test can be changed directly in the ../out-node folder
cd ..

/data/dev/dawn/third_party/node/node-linux-x64/bin/node -e "require('./out-node/common/runtime/cmdline.js');" -- placeholder-arg --gpu-provider /data/dev/dawn/out/Debug/cts.js --verbose --gpu-provider-flag verbose=1 --colors --unroll-const-eval-loops --gpu-provider-flag dlldir=/data/dev/dawn/out/Debug --gpu-provider-flag enable-dawn-features=allow_unsafe_apis "webgpu:wgslsmith,*"

#/data/dev/dawn/third_party/node/node-linux-x64/bin/node -e "require('./out-node/common/runtime/cmdline.js');" -- placeholder-arg --gpu-provider /data/dev/dawn/out/Debug/cts.js --verbose --gpu-provider-flag verbose=1 --colors --unroll-const-eval-loops --gpu-provider-flag dlldir=/data/dev/dawn/out/Debug --gpu-provider-flag enable-dawn-features=allow_unsafe_apis "webgpu:shader,execution,flow_control,loop:*"

#/data/dev/dawn/third_party/node/node-linux-x64/bin/node -e "require('./out-node/common/runtime/cmdline.js');" -- placeholder-arg --gpu-provider /data/dev/dawn/out/Debug/cts.js --verbose --gpu-provider-flag verbose=1 --colors --unroll-const-eval-loops --gpu-provider-flag dlldir=/data/dev/dawn/out/Debug --gpu-provider-flag enable-dawn-features=allow_unsafe_apis "webgpu:shader,execution,flow_control,loop:loop_continue:preventValueOptimizations=false"

#!/bin/sh

# The command must be run from the CTS root folder
# The content of the test can be changed directly in the ../out-node folder
CTS=/data/dev/webgpu_cts_fork
DAWN=/data/dev/dawn
QUERY="webgpu:wgslsmith,*"

cd $CTS

${DAWN}/third_party/node/node-linux-x64/bin/node \
    -e "require('./out-node/common/runtime/cmdline.js');" \
    -- placeholder-arg \
    --gpu-provider \
    ${DAWN}/out/Debug/cts.js \
    --verbose \
    --gpu-provider-flag \
    verbose=1 \
    --colors \
    --unroll-const-eval-loops \
    --gpu-provider-flag \
    dlldir=${DAWN}/out/Debug \
    --gpu-provider-flag enable-dawn-features=allow_unsafe_apis \
    $QUERY

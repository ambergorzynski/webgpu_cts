#!/bin/bash

DAWN=/data/dev/dawn
CTS=/data/dev/webgpu_cts_fork
export VK_ICD_FILENAMES="/data/dev/mesa_mutated/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json"

echo "Running without mutants"

$DAWN/tools/run run-cts \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=$CTS \
    'webgpu:wgslsmith,*' 

echo "Running with each mutant enabled separately"

for i in 438114 438969 438962 439134 506454; do
#for i in 506454; do
    export DREDD_ENABLED_MUTATION=$i

    echo "*********** $i *******************"

        $DAWN/tools/run run-cts \
    --bin=$DAWN/out/Debug \
    --cts=$CTS \
    'webgpu:wgslsmith,*' 
done




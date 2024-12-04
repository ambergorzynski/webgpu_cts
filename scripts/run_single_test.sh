#!/bin/bash

DAWN=/data/dev/dawn
CTS=/data/dev/webgpu_cts_fork

ts=$(date +%s%N)

$DAWN/tools/run run-cts \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=$CTS \
    'webgpu:shader,execution,flow_control,loop:*'

echo $((($(date +%s%N) - $ts)/1000000))

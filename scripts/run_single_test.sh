#!/bin/sh

DAWN=/data/dev/dawn
CTS=/data/dev/webgpu_cts_fork

$DAWN/tools/run run-cts \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=$CTS \
    'webgpu:shader,execution,flow_control,loop:*'

#!/bin/bash

# This script adds new WGSLsmith tests to the CTS build so that they can be run using the CTS CLI

CTS='/data/dev/webgpu_cts_fork'
SHADER=$CTS/wgslsmith_tests/shader.wgsl # replace with argument
OUTPUT=$CTS/wgslsmith_tests/shader_converted.js # replace with argument
DEST_JS=$CTS/out-node/webgpu/wgslsmith/shader_wgslsmith.js
TEST=$CTS/scripts/run_wgslsmith_tests_cmdline.sh

CONVERT=$CTS/wgslsmith_tests/convert_template_to_cts.py

# Assert that initial build exists and build if not
if [ ! -d "${CTS}/out-node" ]; then
    echo "Initial build does not exist. Building..."
    bash "${CTS}/scripts/run_single_test.sh"
    
    if [ -d "${CTS}/out-node" ]; then
        echo "Initial build complete"
    else
        echo "Problem with intial build! Check manually"
        exit 0
    fi
fi

echo "Initial build exists"

# Convert shader format
python $CONVERT ${SHADER} ${INPUTS} ${OUTPUT}

# Copy shader to out-node (make a backup of original shader first)
mv ${DEST_JS} ${DEST_JS}_backup
cp ${WGSLSMITH_JS_CONVERTED} ${DEST_JS}

# Run WGSLsmith test
echo "Running WGSLsmith test..."
bash $TEST

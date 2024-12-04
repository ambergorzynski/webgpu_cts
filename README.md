# WebGPU Conformance Test Suite

This is a fork of the conformance test suite for WebGPU.
It tests the behaviors defined by the [WebGPU specification](https://gpuweb.github.io/gpuweb/).

The contents of this test suite are considered **normative**; implementations must pass
them to be WebGPU-conformant. Mismatches between the specification and tests are bugs.

This test suite can be embedded inside [WPT](https://github.com/web-platform-tests/wpt) or run in standalone.

## [Launch the standalone CTS runner / test plan viewer](https://gpuweb.github.io/cts/standalone/)

# Run custom WGSL shaders using the CTS

Clone this repo and switch to branch `wgslsmith_tests`:
```$
git clone https://github.com/ambergorzynski/webgpu_cts.git
cd webgpu_cts
git switch wgslsmith_tests
```

Install `depot tools`, which manages Dawn's dependencies.
```$
git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git
export PATH=/path/to/depot_tools:$PATH
```

Check out and build a copy of Dawn with node bindings enabled. This has been tested with Dawn commit `a4052b678`.
```$
git clone https://dawn.googlesource.com/dawn && cd dawn
git checkout a4052b678

cp scripts/standalone-with-node.gclient .gclient
gclient sync

mkdir <build-output-path>
cd <build-output-path>
cmake <dawn-root-path> -GNinja -DDAWN_BUILD_NODE_BINDINGS=1
ninja dawn.node
```
## Run WGSLsmith tests 

Create the following (e.g. using WGSLsmith and running the program to determine the expected output):
- A WGSL shader
- An input buffer
- An expected output buffer

Put the shader into the format given in `wgslsmith_tests/template_wgslsmith_shader.js`
TODO: add script to do this step from WGSLsmith outputs directly

Run the script `scripts/update_wgslsmith_tests.sh`. This will do the following:
- Initial build of the CTS if it is not already built
- Convert the template shader to the CTS format
- Copy the shader to the CTS build
- Execute the shader test within the CTS

Test results are shown in the terminal. The test-running process hangs so it is necessary to kill it with `CTRL-c`. 
TODO: Find out why the process hangs, stop it, and write the results out somewhere.

### Further information
Tests can be run using two modes: server or command line.

#### Run using command line (recommended)

This approach requires some manual adjustments in order to work and view the results. The script `scripts/run_single_test_cmd.sh` contains an example of how to run this that works on my Linux machine. 

The available command documentation states that the commandline tests can be run using the following commands, where the `--isolate` flag causes the tests to run using the command line approach instead of the server approach. However, this does not work on my (Linux) machine. Instead, I extracted the underlying test running command (found in the linked script). I removed a `--quiet` option that was being passed internally to the underlying test running command in order to view the test results. The process does not exit gracefully, it simply hangs, so if the `--quiet` flag is enabled then it appears that the process is hanging without doing any work, and the results are not returned.

```$
// DOES NOT WORK!

DAWN=/path/to/dawn_root
CTS=/path/to/webgpu_cts

$DAWN/tools/run run-cts \
    --isolate \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=$CTS \
    'webgpu:wgslsmith,*'
```

The CTS must be built at least once. This is done automatically by running the CTS in server mode (#TODO: Figure out how to build when using command line mode). Run the server mode command from the section below to build the CTS for the first time. This will produce transpiled files in the `./out-node` folder. 

Once built, these files can be directly edited to change the tests. For example, the file `./out-node/webgpu/wgslsmith/shader_wgslsmith.js` can be directly edited to change the shader, inputs, and expected array.


#### Run using server (not recommended)

This approach spins up parallel servers, loads the CTS test tree, and uses HTTPS GET/POST requests to run tests. It is slow because the test tree must be loaded, and any changes to the CTS require the entire tree to be rebuilt.

Edit the paths to your locations and run the WGSLsmith tests as follows:
```$
DAWN=/path/to/dawn_root
CTS=/path/to/webgpu_cts

$DAWN/tools/run run-cts \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=$CTS \
    'webgpu:wgslsmith,*'
```

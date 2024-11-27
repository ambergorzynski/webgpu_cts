# WebGPU Conformance Test Suite

This is a fork of the conformance test suite for WebGPU.
It tests the behaviors defined by the [WebGPU specification](https://gpuweb.github.io/gpuweb/).

The contents of this test suite are considered **normative**; implementations must pass
them to be WebGPU-conformant. Mismatches between the specification and tests are bugs.

This test suite can be embedded inside [WPT](https://github.com/web-platform-tests/wpt) or run in standalone.

## [Launch the standalone CTS runner / test plan viewer](https://gpuweb.github.io/cts/standalone/)

# Run custom WGSL shaders using the CTS

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

Edit the paths to your and run the WGSLsmith tests as follows:
```$
DAWN=/path/to/dawn_root
CTS=/path/to/webgpu_cts

$DAWN/tools/run run-cts \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=$CTS \
    'webgpu:wgslsmith,*'
```
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shaderCode = exports.expected = exports.input = void 0;
exports.input = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

exports.expected = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    
exports.shaderCode = `

struct UniformBuffer {
    a: u32,
    b: u32,
    c: u32,
    d: u32
}

struct StorageBuffer {
    a: u32,
}

@group(0) @binding(0)
var<uniform> u_input: UniformBuffer;

@group(0) @binding(1)
var<storage, read_write> s_output: StorageBuffer;

@compute
@workgroup_size(1)
fn main() {
    s_output = StorageBuffer(u_input.a);
}`
;

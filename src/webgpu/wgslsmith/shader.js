export const shaderCode = `

@group(0) @binding(0)
var<storage, read_write> v : vec4u;

@compute @workgroup_size(1)
fn main() {
  v = vec4u(1,2,3,42);
}
`;
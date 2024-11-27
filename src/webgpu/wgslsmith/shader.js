export const input = [0, 0, 0, 0];
export const expected = [1, 2, 3, 42];

export const shaderCode = `

@group(0) @binding(0)
var<storage, read_write> v : vec4u;

@compute @workgroup_size(1)
fn main() {
  v = vec4u(1,2,3,42);
}
`;
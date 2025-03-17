"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shaderCode = exports.expected = exports.input = void 0;
exports.input = [131,27,184,173,6,243,169,88,222,133,210,176,86,194,218,252,123,92,158,10,41,164,28,37,241,226,140,155,218,184,193,201];
exports.expected = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
exports.shaderCode = `
struct Struct_1 {
    a: u32,
    b: bool,
    c: u32,
    d: vec4<i32>,
}

struct Struct_2 {
    a: vec4<u32>,
    b: Struct_1,
}

struct Struct_3 {
    a: Struct_1,
    b: Struct_1,
}

struct Struct_4 {
    a: Struct_1,
    b: vec4<i32>,
    c: bool,
    d: u32,
    e: vec4<i32>,
}

struct UniformBuffer {
    a: vec4<u32>,
    b: i32,
    c: u32,
    d: i32,
}

struct StorageBuffer {
    a: u32,
    b: i32,
    c: vec3<u32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 29>;

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn func_6(arg_0: Struct_1, arg_1: Struct_2, arg_2: u32) -> i32 {
    if (true) {
        let var_0 = firstTrailingBit(~4294967295u);
        var var_1 = _wgslsmith_mult_vec3_i32(-vec3<i32>(_wgslsmith_div_i32(arg_0.d.x, min(arg_0.d.x, u_input.d)), u_input.b, reverseBits(_wgslsmith_mult_i32(arg_1.b.d.x, u_input.b))), vec3<i32>(i32(-2147483648), _wgslsmith_mult_i32(arg_0.d.x, _wgslsmith_div_i32(arg_0.d.x, _wgslsmith_mult_i32(1i, u_input.d))), arg_1.b.d.x));
        if (arg_1.b.b) {
        }
        let var_2 = ~reverseBits(u_input.c >> (0u % 32u)) >> (arg_0.c % 32u);
        let var_3 = i32(-1i) * -(_wgslsmith_add_i32(_wgslsmith_dot_vec3_i32(arg_1.b.d.yzw, arg_1.b.d.yxy), 2147483647i) << (var_2 % 32u));
    }
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        loop {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            return 1i;
        }
    }
    var var_0 = _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(min(-1737f, 612f)), -1559f, false)))), _wgslsmith_f_op_f32(f32(-1f) * -199f)));
    switch (arg_1.b.d.x) {
        default: {
            if (arg_1.b.b) {
            }
            let var_1 = ~_wgslsmith_clamp_u32(~(~(~u_input.c)), _wgslsmith_div_u32(~132224u, countOneBits(u_input.a.x)) << (1u % 32u), ~0u);
            for (; any(!select(select(vec4<bool>(true, false, arg_0.b, true), select(vec4<bool>(arg_0.b, false, false, arg_1.b.b), vec4<bool>(arg_1.b.b, arg_1.b.b, false, false), vec4<bool>(true, true, true, false)), arg_0.b), select(select(vec4<bool>(arg_1.b.b, false, arg_1.b.b, false), vec4<bool>(arg_1.b.b, true, arg_0.b, arg_0.b), vec4<bool>(false, true, true, true)), vec4<bool>(arg_1.b.b, arg_0.b, arg_1.b.b, true), !vec4<bool>(arg_0.b, true, false, arg_0.b)), true)); ) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                break;
            }
            var var_2 = vec4<bool>(arg_1.b.b, select(arg_0.b, true, true), all(!(!vec4<bool>(true, arg_0.b, true, true))), all(select(vec4<bool>(all(vec2<bool>(arg_0.b, true)), any(vec4<bool>(arg_0.b, arg_1.b.b, true, arg_1.b.b)), false == arg_1.b.b, false), !(!vec4<bool>(true, arg_1.b.b, false, true)), _wgslsmith_f_op_f32(trunc(-249f)) < _wgslsmith_f_op_f32(f32(-1f) * -498f))));
        }
    }
    if (arg_0.b) {
        var_0 = 1f;
        for (; arg_1.b.b; ) {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            break;
        }
        var var_1 = Struct_1(arg_0.a, any(!vec2<bool>(arg_1.b.b, true)) & arg_0.b, firstTrailingBit(_wgslsmith_sub_u32(arg_0.c, 0u)), _wgslsmith_sub_vec4_i32((arg_1.b.d | ~vec4<i32>(arg_0.d.x, u_input.b, 59332i, -1i)) ^ ~arg_1.b.d, firstTrailingBit(vec4<i32>(_wgslsmith_dot_vec2_i32(vec2<i32>(1i, i32(-2147483648)), vec2<i32>(arg_0.d.x, u_input.d)), -29667i, u_input.d, i32(-1i) * -1i))));
        loop {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            var_0 = _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-719f), 1357f))));
            let var_2 = arg_0;
        }
    }
    return u_input.b;
}

fn func_5(arg_0: vec2<u32>) -> vec3<f32> {
    let var_0 = Struct_3(Struct_1(~arg_0.x, false, arg_0.x, vec4<i32>(abs(-1i), u_input.b, _wgslsmith_mod_i32(_wgslsmith_mod_i32(u_input.d, u_input.b), _wgslsmith_mod_i32(u_input.d, u_input.b)), 19363i)), Struct_1(~(~0u) ^ u_input.c, true, 0u, _wgslsmith_add_vec4_i32(_wgslsmith_div_vec4_i32(_wgslsmith_div_vec4_i32(vec4<i32>(-11078i, u_input.b, -28284i, -31956i), vec4<i32>(0i, u_input.d, -8678i, u_input.d)), _wgslsmith_add_vec4_i32(vec4<i32>(u_input.d, u_input.d, u_input.b, -1i), vec4<i32>(-1i, u_input.d, u_input.d, u_input.d))), ~vec4<i32>(-12232i, -1i, u_input.b, 10822i))));
    switch (-21731i) {
        case 0i: {
            switch (_wgslsmith_dot_vec2_i32(vec2<i32>(_wgslsmith_dot_vec2_i32(vec2<i32>(u_input.b, 8194i), vec2<i32>(var_0.b.d.x, -901i)), 23616i), vec2<i32>(-10324i, _wgslsmith_mod_i32(var_0.a.d.x, var_0.b.d.x)))) {
                case 2147483647i: {
                    var var_1 = _wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(-398f, 630f, 240f, 1544f) * vec4<f32>(375f, -783f, 2713f, -331f)))), _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-716f), _wgslsmith_f_op_f32(sign(-496f)), _wgslsmith_f_op_f32(floor(-1704f)), -987f) - _wgslsmith_f_op_vec4_f32(select(vec4<f32>(-1295f, -1000f, -734f, 842f), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-915f, -1746f, 452f, 701f)), true)))))));
                    var var_2 = Struct_4(var_0.b, vec4<i32>(1i, _wgslsmith_div_i32(2147483647i, var_0.b.d.x), -1i, var_0.a.d.x), true, _wgslsmith_sub_u32(~u_input.c, var_0.b.c), var_0.a.d);
                    var_2 = Struct_4(var_0.a, ~vec4<i32>(abs(u_input.b), ~var_2.a.d.x, -_wgslsmith_div_i32(u_input.d, 45992i), 0i), var_2.a.b, _wgslsmith_mult_u32(~firstLeadingBit(~1u), select(arg_0.x, 39046u, true)), _wgslsmith_div_vec4_i32((vec4<i32>(u_input.b, 27457i, 0i, i32(-2147483648)) | _wgslsmith_add_vec4_i32(var_2.e, var_0.b.d)) << ((max(u_input.a, vec4<u32>(1u, var_0.a.a, var_2.d, 36966u)) << (~u_input.a % vec4<u32>(32u))) % vec4<u32>(32u)), vec4<i32>(_wgslsmith_add_i32(var_0.b.d.x, var_2.e.x), ~func_6(Struct_1(u_input.c, false, 21224u, var_0.a.d), Struct_2(u_input.a, var_0.b), arg_0.x), ~(~u_input.d), ~(-9970i))));
                    return vec3<f32>(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(round(1f)))), var_1.x, var_1.x);
                }
                case 10999i: {
                    let var_1 = u_input.a;
                    let var_2 = all(!select(!vec3<bool>(var_0.a.b, true, var_0.a.b), !select(vec3<bool>(var_0.a.b, var_0.b.b, true), vec3<bool>(true, var_0.b.b, var_0.a.b), vec3<bool>(var_0.b.b, var_0.a.b, var_0.a.b)), var_0.b.b));
                    var var_3 = select(select(_wgslsmith_clamp_vec3_u32(vec3<u32>(var_0.a.a, var_0.b.a, 63407u), u_input.a.xyz, u_input.a.zwz) << (firstLeadingBit(vec3<u32>(4294967295u, 55995u, 0u)) % vec3<u32>(32u)), ~(~u_input.a.xyw), all(vec3<bool>(var_0.a.b, true, var_2))), u_input.a.wyy, select(vec3<bool>(0u < u_input.c, false, true), select(vec3<bool>(true, var_2, var_2), !vec3<bool>(true, var_0.a.b, var_2), var_0.b.b), vec3<bool>(true, true, true))) << (countOneBits(~vec3<u32>(var_1.x >> (var_0.b.a % 32u), 1u, arg_0.x)) % vec3<u32>(32u));
                    var_3 = _wgslsmith_add_vec3_u32(~vec3<u32>(var_1.x, var_1.x, abs(~u_input.a.x)), abs(min(var_1.zyz, countOneBits(vec3<u32>(arg_0.x, var_1.x, 4294967295u)))) ^ ~vec3<u32>(u_input.a.x, var_0.a.a, 26970u));
                }
                case i32(-2147483648): {
                    let var_1 = Struct_4(var_0.b, vec4<i32>(24757i, reverseBits(i32(-1i) * -28762i), _wgslsmith_dot_vec2_i32(abs(vec2<i32>(1i, 1i)), vec2<i32>(u_input.d, -u_input.b)), _wgslsmith_sub_i32(-35922i, var_0.a.d.x)), var_0.a.b, 1u, abs(-(vec4<i32>(u_input.d, var_0.b.d.x, 0i, var_0.a.d.x) << (vec4<u32>(u_input.c, 0u, var_0.a.a, u_input.a.x) % vec4<u32>(32u)))) ^ ~vec4<i32>(1i, _wgslsmith_add_i32(var_0.a.d.x, -498i), 1i, _wgslsmith_add_i32(u_input.d, u_input.b)));
                    let var_2 = var_1.e.x;
                    let var_3 = _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(428f, -2104f, any(select(vec3<bool>(var_0.b.b, var_0.b.b, var_1.a.b), vec3<bool>(var_0.b.b, true, var_0.b.b), false)))) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1000f * 671f) + _wgslsmith_div_f32(-249f, -1711f)) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(1935f))))), 1588f));
                    var var_4 = Struct_4(var_0.b, _wgslsmith_mult_vec4_i32(_wgslsmith_sub_vec4_i32(var_0.b.d, vec4<i32>(0i, var_1.a.d.x, var_1.e.x, var_0.a.d.x) & -vec4<i32>(1i, var_1.b.x, var_0.b.d.x, var_1.a.d.x)), var_1.b), true, ~var_1.d >> ((1u >> (~firstTrailingBit(arg_0.x) % 32u)) % 32u), vec4<i32>(_wgslsmith_div_i32(10673i, ~_wgslsmith_add_i32(i32(-2147483648), u_input.b)), var_1.e.x, _wgslsmith_div_i32(_wgslsmith_mod_i32(2147483647i, var_0.a.d.x) & min(u_input.d, u_input.b), -1i), _wgslsmith_div_i32(var_0.a.d.x, min(var_1.a.d.x, -var_1.a.d.x))));
                }
                case -1i: {
                    var var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -414f) * -1081f), _wgslsmith_f_op_f32(804f + -1000f), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(sign(-2772f))))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-450f, -710f, 741f))), vec3<bool>(all(!vec4<bool>(true, true, var_0.a.b, true)), var_0.b.b, !var_0.b.b))));
                }
                default: {
                    var var_1 = select(select(vec2<bool>(true, -var_0.a.d.x <= 1i), !(!select(vec2<bool>(var_0.a.b, var_0.a.b), vec2<bool>(true, var_0.b.b), var_0.b.b)), _wgslsmith_mod_u32(arg_0.x, 0u) <= var_0.b.a), select(!vec2<bool>(true, var_0.a.b), select(vec2<bool>(all(vec3<bool>(var_0.b.b, false, true)), false), vec2<bool>(true, true), select(var_0.a.b, all(vec4<bool>(var_0.b.b, var_0.a.b, var_0.b.b, false)), any(vec4<bool>(var_0.a.b, true, true, var_0.b.b)))), true), select(~u_input.b >> (_wgslsmith_div_u32(var_0.b.c, var_0.a.a) % 32u), -29242i, (var_0.b.b && true) == var_0.b.b) <= 47264i);
                    var var_2 = firstTrailingBit(-_wgslsmith_dot_vec2_i32(var_0.b.d.wz ^ var_0.a.d.zw, vec2<i32>(var_0.b.d.x, u_input.b) >> (u_input.a.zw % vec2<u32>(32u))));
                }
            }
        }
        case i32(-2147483648): {
            var var_1 = var_0;
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                var var_2 = vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -578f) * _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(1256f - -164f)))))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-795f - -183f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-127f + 1434f) - -2045f) - _wgslsmith_f_op_f32(f32(-1f) * -926f)), false)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -1019f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-1491f - -2054f), _wgslsmith_f_op_f32(1873f - 1136f)) - 1081f) - _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(-1487f, 423f)))))));
                let var_3 = abs(var_1.b.d.xw) << (abs(~countOneBits(arg_0)) % vec2<u32>(32u));
                var_2 = _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(854f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_2.x)), 1608f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_2.x + 2099f) - _wgslsmith_f_op_f32(var_2.x * 656f))), vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(463f)) + _wgslsmith_f_op_f32(-var_2.x)), -957f, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(ceil(var_2.x)))), -987f), vec4<bool>(true, false, true, true))), _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-527f - -856f)), var_2.x, var_2.x, -414f) * _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(vec4<f32>(var_2.x, -1108f, 820f, -1257f), vec4<f32>(var_2.x, var_2.x, -1031f, var_2.x)) + vec4<f32>(-1000f, -461f, 1229f, var_2.x)))));
                return var_2.yww;
            }
            for (; !var_0.a.b; ) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                var var_2 = u_input.b;
                let var_3 = 8144u;
                let var_4 = var_1.a.b;
                var_2 = i32(-1i) * -_wgslsmith_dot_vec2_i32(var_1.a.d.zz, vec2<i32>(_wgslsmith_dot_vec2_i32(var_1.b.d.zw, var_1.b.d.ww), -46063i));
                let var_5 = Struct_2(~(~_wgslsmith_mod_vec4_u32(reverseBits(vec4<u32>(arg_0.x, var_3, 20295u, 1u)), select(vec4<u32>(63955u, var_1.a.a, 17953u, 69846u), vec4<u32>(1u, var_3, 1u, 48747u), var_1.b.b))), Struct_1(~0u, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-717f)) > _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(1001f + -592f))), 71779u, _wgslsmith_mod_vec4_i32(abs(~var_1.a.d), _wgslsmith_mod_vec4_i32(vec4<i32>(-21144i, -17425i, u_input.d, var_1.b.d.x), var_1.b.d) & firstTrailingBit(vec4<i32>(-834i, 51526i, 0i, var_1.a.d.x)))));
            }
        }
        case -27830i: {
            let var_1 = Struct_1(12014u, var_0.a.b && any(vec4<bool>(true, false, all(vec3<bool>(false, false, true)), any(vec3<bool>(false, false, true)))), ~u_input.a.x, vec4<i32>(~(~var_0.a.d.x | 1i), _wgslsmith_mult_i32(-var_0.a.d.x, func_6(Struct_1(u_input.a.x, true, 40845u, vec4<i32>(var_0.b.d.x, 14590i, var_0.a.d.x, -1i)), Struct_2(u_input.a, Struct_1(25139u, false, arg_0.x, vec4<i32>(2147483647i, -20184i, var_0.a.d.x, var_0.a.d.x))), abs(arg_0.x))), _wgslsmith_div_i32(var_0.a.d.x, var_0.b.d.x), 12039i));
            let var_2 = _wgslsmith_add_vec3_i32(-_wgslsmith_mod_vec3_i32(~vec3<i32>(-28165i, u_input.b, i32(-2147483648)), -vec3<i32>(-7259i, -20284i, var_1.d.x)), var_0.a.d.wzw);
            let var_3 = -714f;
            var var_4 = vec3<f32>(106f, 1512f, _wgslsmith_f_op_f32(trunc(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-var_3), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-var_3)))))));
        }
        case 1i: {
        }
        default: {
            return _wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-588f, 2018f, 880f)))) + _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(sign(vec3<f32>(988f, -579f, -822f))))), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(vec3<f32>(523f, -1212f, -919f) * vec3<f32>(159f, 1029f, -1316f)), _wgslsmith_f_op_vec3_f32(min(vec3<f32>(268f, -1971f, -2025f), vec3<f32>(697f, 519f, 1000f))))), _wgslsmith_f_op_vec3_f32(vec3<f32>(579f, -202f, 3176f) - _wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(-1353f, -446f, 2055f)))), !var_0.b.b))) - _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1000f, 501f, 597f)))));
        }
    }
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        continue;
    }
    var var_1 = abs(var_0.a.d.x);
    let var_2 = _wgslsmith_add_vec3_i32(vec3<i32>(func_6(var_0.a, Struct_2(u_input.a | u_input.a, var_0.a), 1850u), -2147483647i, ~(-1i)), var_0.b.d.ywx);
    return _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(max(vec3<f32>(1000f, 919f, -989f), _wgslsmith_f_op_vec3_f32(floor(vec3<f32>(113f, 1968f, 451f)))))), _wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_div_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(1991f, -1483f, -1391f), vec3<f32>(-2673f, 1019f, -574f)), _wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(1063f, 138f, -461f))))))));
}

fn func_4(arg_0: vec4<i32>, arg_1: f32) -> f32 {
    for (var var_0 = 2147483647i; var_0 > -1i; var_0 += 1i) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        var_0 = ~(_wgslsmith_add_i32(select(-1i, _wgslsmith_mult_i32(-23128i, 57473i), true), u_input.b) >> (firstLeadingBit(~(48118u ^ u_input.a.x)) % 32u));
        var var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(func_5(u_input.a.xz)));
        var var_2 = Struct_3(Struct_1(~1u, any(vec3<bool>(true, true, true)), _wgslsmith_div_u32(~u_input.c, ~u_input.a.x), reverseBits(-vec4<i32>(u_input.d, -13987i, u_input.b, arg_0.x) & ~vec4<i32>(u_input.b, -18525i, -1i, 1i))), Struct_1(1u, true, ~firstLeadingBit(max(u_input.c, 1u)), vec4<i32>(-24739i, u_input.d, arg_0.x, min(arg_0.x, -u_input.b))));
        switch (_wgslsmith_dot_vec2_i32(~(~vec2<i32>(i32(-1i) * -1i, -arg_0.x)), min(var_2.b.d.zz, arg_0.zx << (~select(u_input.a.wx, u_input.a.xx, vec2<bool>(var_2.a.b, var_2.b.b)) % vec2<u32>(32u))))) {
            case -1i: {
                continue;
            }
            default: {
            }
        }
    }
    let var_0 = arg_1 > _wgslsmith_div_f32(_wgslsmith_div_f32(arg_1, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -869f))), _wgslsmith_f_op_f32(-234f));
    let var_1 = u_input.d;
    let var_2 = Struct_3(Struct_1(0u, var_0, _wgslsmith_dot_vec4_u32(countOneBits(vec4<u32>(2114u, 32139u, u_input.a.x, u_input.c)), ~u_input.a), arg_0 & arg_0), Struct_1(~u_input.c, any(vec3<bool>(all(vec4<bool>(var_0, var_0, var_0, true)), var_0, any(vec2<bool>(var_0, true)))), u_input.c, vec4<i32>(arg_0.x, 61671i, -1i, _wgslsmith_dot_vec4_i32(~arg_0, vec4<i32>(15415i, u_input.b, -1i, arg_0.x)))));
    return -1870f;
}

fn func_3(arg_0: Struct_1) -> Struct_3 {
    let var_0 = _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(floor(-436f)), _wgslsmith_f_op_f32(func_4(vec4<i32>(u_input.b, 1i, u_input.b, u_input.b), 693f))) * 214f) + _wgslsmith_f_op_f32(-1434f + _wgslsmith_f_op_f32(1299f - _wgslsmith_f_op_vec3_f32(func_5(u_input.a.yz)).x)))));
    var var_1 = Struct_3(Struct_1(reverseBits(_wgslsmith_dot_vec3_u32(_wgslsmith_clamp_vec3_u32(vec3<u32>(22073u, arg_0.c, u_input.c), u_input.a.yzx, u_input.a.zzx), u_input.a.zyy)), any(vec3<bool>(arg_0.b, arg_0.b || true, arg_0.b)), _wgslsmith_add_u32(~arg_0.c, _wgslsmith_add_u32(38353u, 1u)), arg_0.d), arg_0);
    var_1 = Struct_3(Struct_1(~_wgslsmith_div_u32(0u, _wgslsmith_dot_vec4_u32(u_input.a, u_input.a)), true && any(!vec3<bool>(true, var_1.a.b, true)), ~u_input.c, var_1.b.d), arg_0);
    var var_2 = u_input.a.xx;
    let var_3 = -1290f;
    return Struct_3(arg_0, Struct_1(_wgslsmith_add_u32(27791u, reverseBits(9509u)), !arg_0.b, _wgslsmith_div_u32(arg_0.a, var_2.x), vec4<i32>(u_input.d, _wgslsmith_clamp_i32(u_input.d << (1u % 32u), u_input.b << (0u % 32u), select(var_1.a.d.x, arg_0.d.x, var_1.b.b)), -1i, arg_0.d.x & var_1.a.d.x)));
}

fn func_7(arg_0: Struct_3, arg_1: i32) -> vec3<u32> {
    var var_0 = !vec3<bool>(arg_0.b.b, false, true);
    switch (u_input.b) {
        default: {
            let var_1 = Struct_1(~(u_input.a.x & u_input.c), select(select(true, true, (44311i <= u_input.b) | true), all(select(var_0.xz, var_0.xy, vec2<bool>(false, var_0.x))), true), firstLeadingBit(~(4294967295u << (u_input.a.x % 32u))) | abs(4294967295u), arg_0.b.d);
            let var_2 = _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(-480f)))))));
            if (true) {
                let var_3 = _wgslsmith_mult_vec2_u32(max(vec2<u32>(0u, arg_0.b.c), abs(~u_input.a.xy) << (u_input.a.yw % vec2<u32>(32u))), select(_wgslsmith_div_vec2_u32(vec2<u32>(1u, var_1.c), ~min(u_input.a.xz, vec2<u32>(19561u, arg_0.a.a))), vec2<u32>(~1u, arg_0.a.a), arg_0.b.b));
                var_0 = select(vec3<bool>(true, var_0.x, all(vec2<bool>(true, any(var_0.xz)))), select(vec3<bool>(true, arg_0.a.b, false), vec3<bool>(false && var_1.b, any(var_0.zy), true), true), !vec3<bool>(all(vec3<bool>(var_0.x, true, false)), select(var_0.x, true, true), var_0.x));
                var var_4 = true;
                let var_5 = _wgslsmith_f_op_f32(sign(_wgslsmith_div_f32(-1573f, _wgslsmith_f_op_vec3_f32(func_5(~_wgslsmith_add_vec2_u32(var_3, var_3))).x)));
            }
        }
    }
    var var_1 = Struct_1(4294967295u, !var_0.x, countOneBits(1u), arg_0.b.d);
    for (; ; ) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
    }
    var_0 = !select(!vec3<bool>(all(vec4<bool>(var_0.x, var_1.b, arg_0.b.b, var_0.x)), any(var_0.yx), true), select(!select(vec3<bool>(var_0.x, true, false), vec3<bool>(var_1.b, var_1.b, false), vec3<bool>(var_1.b, false, false)), select(vec3<bool>(var_0.x, true, false), select(vec3<bool>(var_1.b, false, false), vec3<bool>(true, var_1.b, var_1.b), vec3<bool>(false, var_1.b, var_1.b)), !vec3<bool>(true, false, arg_0.a.b)), arg_0.a.b), select(!select(vec3<bool>(false, var_1.b, arg_0.b.b), vec3<bool>(true, false, var_1.b), vec3<bool>(true, true, false)), vec3<bool>(true, all(var_0.yy), any(vec3<bool>(var_0.x, false, true))), all(vec3<bool>(true, true, true))));
    return vec3<u32>(firstTrailingBit(31957u) << (~(~(~arg_0.b.c)) % 32u), _wgslsmith_add_u32(1u, ~(~(~11734u))), ~(~0u));
}

fn func_8(arg_0: vec4<u32>, arg_1: u32, arg_2: vec3<bool>, arg_3: vec3<u32>) -> Struct_3 {
    switch (~(-10766i)) {
        case -45991i: {
        }
        case -45691i: {
            let var_0 = firstTrailingBit(arg_0.yyx & u_input.a.xxw) >> (arg_3 % vec3<u32>(32u));
            let var_1 = vec3<u32>(u_input.a.x, u_input.c, _wgslsmith_div_u32(_wgslsmith_clamp_u32(~(~var_0.x), ~0u, _wgslsmith_mod_u32(4294967295u, ~1u)), 0u));
            var var_2 = _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-1000f + 1366f)));
        }
        case 6517i: {
            if (true) {
            }
        }
        default: {
            if (arg_2.x) {
                let var_0 = vec4<i32>(-11122i, _wgslsmith_sub_i32(i32(-1i) * -1i, -40994i), reverseBits(firstTrailingBit(-29598i)), u_input.b);
            }
            var var_0 = ~u_input.d;
            for (var var_1 = 30869i; var_1 < 8519i; var_0 = -37465i) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                var var_2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(-1000f, -1000f, -449f, 1137f) + _wgslsmith_f_op_vec4_f32(vec4<f32>(-656f, 180f, -1000f, 1232f) + vec4<f32>(1953f, 274f, 1921f, -2149f))), _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(vec4<f32>(-845f, -425f, -461f, 291f) - vec4<f32>(701f, 122f, -748f, 454f)))))));
            }
        }
    }
    var var_0 = Struct_2(reverseBits(vec4<u32>(func_3(Struct_1(4294967295u, false, arg_1, vec4<i32>(u_input.b, 0i, -1i, u_input.b))).a.c, min(u_input.c, 4294967295u), ~u_input.c, ~u_input.a.x) & countOneBits(~u_input.a)), Struct_1(arg_1, true, func_7(Struct_3(func_3(Struct_1(u_input.a.x, arg_2.x, 20204u, vec4<i32>(-13480i, u_input.b, -106172i, -51633i))).b, func_3(Struct_1(u_input.c, true, arg_0.x, vec4<i32>(1i, u_input.d, u_input.b, u_input.d))).a), i32(-2147483648)).x, min(~vec4<i32>(2147483647i, u_input.d, u_input.d, -1i), _wgslsmith_div_vec4_i32(vec4<i32>(0i, 1i, u_input.d, 1i), vec4<i32>(u_input.b, 2147483647i, u_input.d, u_input.d))) | vec4<i32>(u_input.b ^ 16314i, u_input.d, _wgslsmith_div_i32(i32(-2147483648), 7823i), ~(-62788i))));
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        if (~(-_wgslsmith_dot_vec2_i32(vec2<i32>(i32(-2147483648), u_input.d) | var_0.b.d.yx, var_0.b.d.wx)) >= (var_0.b.d.x | 1i)) {
            continue;
        }
        break;
    }
    var var_1 = Struct_3(func_3(func_3(func_3(Struct_1(arg_1, true, var_0.a.x, var_0.b.d)).b).b).b, Struct_1(arg_0.x, any(arg_2.zz), firstLeadingBit(countOneBits(arg_1)), vec4<i32>(reverseBits(-67909i), _wgslsmith_mod_i32(_wgslsmith_dot_vec2_i32(var_0.b.d.xx, var_0.b.d.xz), var_0.b.d.x >> (var_0.a.x % 32u)), -u_input.d, u_input.b)));
    var var_2 = _wgslsmith_mod_vec3_i32(select(abs(vec3<i32>(~(-31405i), i32(-1i) * -17955i, 0i)), _wgslsmith_mult_vec3_i32(firstTrailingBit(_wgslsmith_div_vec3_i32(var_1.b.d.yxz, var_0.b.d.xwx)), abs(countOneBits(vec3<i32>(u_input.b, 6822i, u_input.d)))), !select(vec3<bool>(var_1.b.b, var_0.b.b, var_1.a.b), arg_2, any(vec4<bool>(var_0.b.b, true, arg_2.x, var_1.a.b)))), vec3<i32>(func_3(Struct_1(var_1.a.a, var_0.b.b, ~65268u, -var_1.a.d)).b.d.x, -var_1.a.d.x, -1i));
    return Struct_3(var_0.b, var_0.b);
}

fn func_2(arg_0: u32, arg_1: Struct_4, arg_2: i32) -> i32 {
    for (var var_0 = 19321i; var_0 >= i32(-2147483648); ) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        for (var var_1 = i32(-2147483648); ; var_1 += 1i) {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            var var_2 = func_8(vec4<u32>(1u, _wgslsmith_sub_u32(u_input.c, ~u_input.c | (48286u << (0u % 32u))), _wgslsmith_mod_u32(~arg_1.a.a, (70851u & arg_1.a.a) >> (_wgslsmith_div_u32(1u, 1u) % 32u)), arg_1.a.c ^ 0u), _wgslsmith_mult_u32(0u, arg_1.a.c), select(vec3<bool>(arg_1.a.b, !arg_1.c && true, arg_1.c), vec3<bool>(true, arg_1.a.b, !arg_1.c), !(!(!vec3<bool>(arg_1.c, false, arg_1.c)))), vec3<u32>(~u_input.a.x ^ 4294967295u, arg_1.a.a << (arg_1.a.c % 32u), min(arg_0, 21839u) >> (_wgslsmith_mod_u32(1760u, 102701u) % 32u)) << (~func_7(func_3(arg_1.a), 0i) % vec3<u32>(32u)));
            var var_3 = _wgslsmith_clamp_vec4_i32(-_wgslsmith_mod_vec4_i32(var_2.a.d, arg_1.b), _wgslsmith_mult_vec4_i32(_wgslsmith_div_vec4_i32(var_2.a.d, _wgslsmith_add_vec4_i32(var_2.a.d, var_2.a.d)), _wgslsmith_mod_vec4_i32(~var_2.b.d ^ vec4<i32>(var_2.b.d.x, var_2.b.d.x, 18486i, arg_2), vec4<i32>(0i, u_input.d, ~1i, _wgslsmith_dot_vec2_i32(arg_1.a.d.zz, var_2.b.d.zw)))), ~vec4<i32>(arg_1.a.d.x, -arg_2, 2147483647i, _wgslsmith_div_i32(~arg_1.a.d.x, i32(-1i) * i32(-2147483648))));
            let var_4 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_vec3_f32(func_5(select(_wgslsmith_sub_vec2_u32(abs(vec2<u32>(4294967295u, arg_0)), _wgslsmith_add_vec2_u32(vec2<u32>(50698u, 26345u), u_input.a.xx)), _wgslsmith_mod_vec2_u32(u_input.a.zx, select(vec2<u32>(4294967295u, 68221u), vec2<u32>(32417u, 25377u), vec2<bool>(var_2.b.b, arg_1.c))), vec2<bool>(arg_1.c & var_2.b.b, true)))).x);
        }
        var_0 = u_input.d;
        var var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(min(vec3<f32>(-375f, -425f, 995f), vec3<f32>(689f, -413f, 2324f))))), vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-2308f)), 646f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_4(vec4<i32>(arg_2, arg_2, arg_1.b.x, arg_2), -179f))))));
        var var_2 = Struct_4(Struct_1(~_wgslsmith_add_u32(select(0u, 41610u, arg_1.a.b), 0u), arg_1.a.b, 4294967295u, reverseBits(-(arg_1.e << (u_input.a % vec4<u32>(32u))))), vec4<i32>(_wgslsmith_mod_i32(arg_2, -13321i), _wgslsmith_sub_i32(-2147483647i, ~func_8(vec4<u32>(3402u, 4294967295u, arg_1.a.c, arg_0), u_input.c, vec3<bool>(true, true, arg_1.a.b), vec3<u32>(arg_0, 0u, 53949u)).b.d.x), ~select(u_input.d, _wgslsmith_dot_vec4_i32(arg_1.a.d, arg_1.e), arg_1.c), ~arg_2), all(select(select(!vec4<bool>(false, arg_1.c, arg_1.c, false), vec4<bool>(arg_1.c, false, arg_1.c, false), all(vec2<bool>(true, arg_1.a.b))), select(!vec4<bool>(arg_1.c, false, arg_1.c, false), !vec4<bool>(false, arg_1.a.b, true, arg_1.c), 33765u == arg_1.a.c), func_8(vec4<u32>(6276u, arg_0, 73787u, 4294967295u), arg_0, vec3<bool>(true, arg_1.c, true), select(vec3<u32>(4294967295u, 0u, u_input.c), vec3<u32>(0u, 0u, arg_1.a.c), vec3<bool>(arg_1.c, arg_1.c, true))).a.b)), arg_1.a.c, vec4<i32>(u_input.b << (u_input.a.x % 32u), 6322i, arg_2, 1i >> (arg_1.a.a % 32u)));
        loop {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        }
    }
    let var_0 = Struct_3(arg_1.a, Struct_1(~(~arg_0), !(countOneBits(arg_2) > i32(-2147483648)), _wgslsmith_mult_u32(~_wgslsmith_dot_vec4_u32(vec4<u32>(arg_0, 8942u, 1u, u_input.c), vec4<u32>(u_input.c, 22231u, 49741u, 56658u)), ~_wgslsmith_dot_vec4_u32(u_input.a, vec4<u32>(11743u, arg_0, 28447u, arg_0))), arg_1.b));
    let var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1000f - -1410f) * _wgslsmith_f_op_f32(f32(-1f) * -636f)), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-825f), _wgslsmith_f_op_f32(max(1308f, -426f)))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(round(-1067f)))), _wgslsmith_div_f32(-1146f, _wgslsmith_f_op_f32(-812f - 334f)))));
    for (var var_2 = -63471i; func_3(Struct_1(7780u, arg_0 <= ~(~0u), _wgslsmith_dot_vec4_u32(vec4<u32>(64264u, 0u, 54990u | var_0.b.c, 1u), _wgslsmith_clamp_vec4_u32(vec4<u32>(arg_1.a.c, 19494u, u_input.a.x, arg_0) ^ vec4<u32>(1u, u_input.a.x, 0u, 4294967295u), u_input.a, ~u_input.a)), vec4<i32>(var_0.a.d.x, arg_1.b.x, var_0.a.d.x, var_0.b.d.x | _wgslsmith_dot_vec4_i32(var_0.a.d, vec4<i32>(arg_1.b.x, arg_2, 9000i, i32(-2147483648)))))).b.b; ) {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
    }
    for (var var_2 = _wgslsmith_clamp_i32(func_8(vec4<u32>(52635u, 22836u, 44859u, ~firstTrailingBit(var_0.a.c)), 6747u >> (var_0.a.a % 32u), select(select(vec3<bool>(false, var_0.b.b, false), select(vec3<bool>(var_0.b.b, var_0.b.b, var_0.b.b), vec3<bool>(false, true, true), var_0.a.b), true), !(!vec3<bool>(false, arg_1.a.b, var_0.a.b)), all(select(vec2<bool>(arg_1.a.b, true), vec2<bool>(true, false), false))), u_input.a.xxx ^ vec3<u32>(~var_0.b.c, ~var_0.b.a, ~arg_0)).b.d.x, -10844i, _wgslsmith_dot_vec2_i32(abs(var_0.a.d.yx), ~func_8(vec4<u32>(1u, arg_1.d, u_input.c, 1u), ~39894u, vec3<bool>(arg_1.c, arg_1.a.b, true), max(vec3<u32>(4294967295u, 1u, arg_0), vec3<u32>(u_input.c, var_0.a.c, arg_1.a.c))).b.d.zw)); var_2 != 13278i; var_2 -= 1i) {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        for (; false; ) {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
            return _wgslsmith_dot_vec2_i32(min(countOneBits(reverseBits(vec2<i32>(var_0.a.d.x, arg_2))) | (var_0.b.d.zx << (~u_input.a.zx % vec2<u32>(32u))), vec2<i32>(max(select(1i, -52550i, var_0.a.b), i32(-1i) * i32(-2147483648)), arg_1.a.d.x)), _wgslsmith_div_vec2_i32(vec2<i32>(-30599i, -arg_2), _wgslsmith_sub_vec2_i32(vec2<i32>(arg_1.a.d.x, arg_1.b.x) ^ var_0.b.d.ww, arg_1.a.d.xw)) << (abs(_wgslsmith_sub_vec2_u32(vec2<u32>(5394u, var_0.a.c), ~u_input.a.xy)) % vec2<u32>(32u)));
        }
        if (all(!vec3<bool>(arg_1.c && true, true, all(vec2<bool>(arg_1.c, true))))) {
            break;
        }
    }
    return _wgslsmith_sub_i32(firstTrailingBit(2147483647i), func_6(func_8(u_input.a, _wgslsmith_dot_vec4_u32(min(u_input.a, u_input.a), _wgslsmith_mod_vec4_u32(vec4<u32>(4294967295u, 0u, 24375u, u_input.c), u_input.a)), vec3<bool>(arg_1.a.b != var_0.b.b, true || var_0.b.b, true), _wgslsmith_sub_vec3_u32(_wgslsmith_add_vec3_u32(vec3<u32>(var_0.a.c, 269u, 1u), u_input.a.wxx), vec3<u32>(var_0.a.a, arg_0, arg_1.a.c))).b, Struct_2(u_input.a, func_3(Struct_1(295u, true, 4294967295u, var_0.b.d)).a), ~abs(~4294967295u)));
}

fn func_1(arg_0: Struct_4, arg_1: Struct_3, arg_2: vec3<bool>, arg_3: bool) -> vec2<bool> {
    let var_0 = 160f;
    if (arg_3) {
        switch (abs(-(func_2(arg_1.a.c, Struct_4(Struct_1(0u, true, 1u, arg_0.e), vec4<i32>(2147483647i, 1i, u_input.d, i32(-2147483648)), arg_1.b.b, 20886u, arg_0.e), 2147483647i) ^ abs(0i))) & -28683i) {
            default: {
                var var_1 = func_3(arg_0.a).a;
                var_1 = Struct_1(var_1.c, false, arg_1.a.c, -_wgslsmith_add_vec4_i32(var_1.d, func_3(Struct_1(43519u, false, arg_1.a.c, arg_1.b.d)).a.d));
            }
        }
        for (var var_1: i32; var_1 <= -43960i; ) {
            if (LOOP_COUNTERS[18u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
            let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0))) >= 425f;
            break;
        }
        switch (-1i) {
            case 4273i: {
                let var_1 = vec2<bool>(!any(!vec4<bool>(true, arg_0.c, arg_3, arg_3)), any(arg_2.zx));
                var var_2 = select(vec4<bool>(false, select(true, true, false | all(vec2<bool>(arg_3, true))), true, arg_3), vec4<bool>(all(vec4<bool>(arg_2.x, all(var_1), true, !arg_3)), false, select(arg_0.a.b, false, !(arg_0.a.b | true)), !arg_2.x), arg_3 || arg_0.a.b);
                var_2 = vec4<bool>(countOneBits(arg_1.a.c) < func_3(func_3(Struct_1(arg_0.a.a, false, arg_0.a.c, arg_1.a.d)).a).a.c, func_3(Struct_1(~u_input.a.x | ~4294967295u, any(!vec4<bool>(arg_1.a.b, true, false, arg_3)), ~0u, vec4<i32>(-arg_1.b.d.x, -arg_1.b.d.x, i32(-1i) * -50096i, 2147483647i))).b.b, true || !func_3(arg_1.a).a.b, 1660u <= ~(_wgslsmith_sub_u32(0u, u_input.a.x) | 32210u));
            }
            default: {
                var var_1 = _wgslsmith_clamp_vec3_i32(arg_0.a.d.wwx, ~firstLeadingBit(arg_1.b.d.zzy), arg_0.a.d.xxy);
                var var_2 = Struct_2(_wgslsmith_mult_vec4_u32(countOneBits(_wgslsmith_div_vec4_u32(u_input.a, vec4<u32>(0u, arg_0.d, 13048u, 4294967295u))), abs(vec4<u32>(0u, arg_1.b.c, 6199u, arg_0.a.c) >> (u_input.a % vec4<u32>(32u)))), arg_1.b);
                let var_3 = _wgslsmith_div_i32(_wgslsmith_clamp_i32(_wgslsmith_sub_i32(countOneBits(-4965i), 2147483647i), _wgslsmith_add_i32(select(-arg_0.e.x, 26004i, var_2.b.b), var_2.b.d.x), min(1i, reverseBits(1i))), _wgslsmith_add_i32(countOneBits(3626i), func_3(func_8(u_input.a | vec4<u32>(21055u, u_input.c, 1u, 1u), func_3(arg_1.a).b.a, !vec3<bool>(false, true, var_2.b.b), max(vec3<u32>(u_input.a.x, u_input.c, arg_1.a.c), vec3<u32>(44479u, var_2.b.c, 40940u))).b).a.d.x));
            }
        }
        let var_1 = vec2<bool>(true, !(-480f > _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-692f) * var_0)));
        var var_2 = func_3(Struct_1(_wgslsmith_mult_u32(firstLeadingBit(arg_1.a.a & 32681u), ~_wgslsmith_dot_vec4_u32(u_input.a, vec4<u32>(0u, 23581u, 42565u, 23219u))), all(select(vec2<bool>(arg_1.b.b, false), vec2<bool>(var_1.x, true), all(arg_2.yx))), 17732u, _wgslsmith_clamp_vec4_i32(vec4<i32>(arg_1.a.d.x << (u_input.c % 32u), -arg_0.a.d.x, _wgslsmith_clamp_i32(0i, -18208i, 1i), _wgslsmith_sub_i32(17886i, 0i)), arg_1.a.d, -vec4<i32>(arg_1.b.d.x, 10617i, arg_1.a.d.x, arg_1.b.d.x))));
    }
    loop {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        var var_1 = Struct_4(func_3(Struct_1(~16871u, false, _wgslsmith_div_u32(~arg_0.a.c, ~arg_0.d), -vec4<i32>(arg_0.a.d.x, u_input.d, 1i, arg_0.e.x))).a, vec4<i32>(-1i) * -vec4<i32>(firstLeadingBit(i32(-2147483648)), func_6(Struct_1(arg_0.a.c, true, arg_0.d, vec4<i32>(u_input.d, -24468i, u_input.d, u_input.b)), Struct_2(vec4<u32>(arg_0.a.c, arg_1.b.c, 82737u, arg_0.a.a), Struct_1(arg_0.d, false, 54520u, vec4<i32>(arg_1.b.d.x, -1i, 1i, i32(-2147483648)))), 1u), max(11552i, arg_1.a.d.x), 10424i), any(!select(vec4<bool>(false, arg_2.x, true, true), select(vec4<bool>(arg_0.c, true, arg_1.a.b, false), vec4<bool>(arg_3, arg_2.x, arg_3, false), vec4<bool>(true, false, arg_0.a.b, arg_0.c)), arg_2.x)), ~func_8(~select(u_input.a, u_input.a, true), ~(~13614u), vec3<bool>(arg_0.c, !arg_2.x, arg_3), vec3<u32>(arg_0.d, u_input.a.x, arg_1.a.a >> (0u % 32u))).a.c, vec4<i32>(arg_0.e.x, ~(-2147483647i), arg_0.e.x, 1i));
    }
    var var_1 = _wgslsmith_div_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_vec3_f32(func_5(u_input.a.wy)).x)), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(var_0))))), -886f, _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-var_0)))), _wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(-1225f, -1893f, var_0, -1513f), _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0, var_0, var_0, -126f)))))));
    if (arg_2.x) {
    }
    return !select(arg_2.zz, !arg_2.xz, select(arg_2.yy, arg_2.yy, arg_0.c));
}

fn func_9(arg_0: bool, arg_1: vec2<bool>, arg_2: vec2<i32>, arg_3: f32) -> vec2<bool> {
    if (true) {
        loop {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            break;
        }
        switch (_wgslsmith_dot_vec4_i32(_wgslsmith_sub_vec4_i32(countOneBits(-_wgslsmith_sub_vec4_i32(vec4<i32>(arg_2.x, -16715i, u_input.d, -19603i), vec4<i32>(53634i, 2147483647i, arg_2.x, -1i))), _wgslsmith_sub_vec4_i32(-vec4<i32>(u_input.d, -1i, -1i, arg_2.x) & (vec4<i32>(-38659i, -40138i, 1i, arg_2.x) | vec4<i32>(1i, 1i, 21074i, u_input.b)), reverseBits(vec4<i32>(-16074i, u_input.b, -1i, -33754i)))), _wgslsmith_mod_vec4_i32((vec4<i32>(56982i, arg_2.x, 2147483647i, 52900i) >> (_wgslsmith_div_vec4_u32(u_input.a, vec4<u32>(1u, 11097u, 1u, 0u)) % vec4<u32>(32u))) | vec4<i32>(arg_2.x, i32(-2147483648), arg_2.x, min(-24879i, -1i)), vec4<i32>(_wgslsmith_dot_vec3_i32(_wgslsmith_clamp_vec3_i32(vec3<i32>(1i, arg_2.x, arg_2.x), vec3<i32>(20033i, u_input.b, arg_2.x), vec3<i32>(u_input.b, arg_2.x, arg_2.x)), vec3<i32>(1i, 41886i, 1i)), select(_wgslsmith_sub_i32(604i, u_input.d), -1i, all(vec3<bool>(false, arg_0, false))), u_input.d, ~arg_2.x)))) {
            case 1i: {
                var var_0 = select(arg_1, !vec2<bool>(false, func_1(Struct_4(Struct_1(17090u, false, u_input.a.x, vec4<i32>(arg_2.x, -21418i, 1i, 2147483647i)), vec4<i32>(u_input.b, -27791i, -17114i, u_input.d), arg_0, 1u, vec4<i32>(0i, u_input.d, 2147483647i, u_input.d)), Struct_3(Struct_1(43178u, true, 50947u, vec4<i32>(6336i, u_input.d, -29823i, 22698i)), Struct_1(u_input.a.x, arg_0, u_input.a.x, vec4<i32>(u_input.b, i32(-2147483648), 2147483647i, 16634i))), select(vec3<bool>(arg_0, true, true), vec3<bool>(false, arg_0, arg_0), vec3<bool>(false, arg_1.x, arg_0)), arg_0).x), true);
                var var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(trunc(161f)), 280f, _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(f32(-1f) * -2085f), arg_3, arg_0)), _wgslsmith_f_op_f32(round(-2261f)))));
                var var_2 = 1000f;
                return !select(arg_1, arg_1, arg_1);
            }
            default: {
                let var_0 = arg_1;
                let var_1 = 11434i;
                var var_2 = u_input.a.zwy;
            }
        }
        if (false) {
            let var_0 = arg_2.x ^ (-1i >> (0u % 32u));
        }
        let var_0 = Struct_1(~_wgslsmith_add_u32(~4294967295u, u_input.c), true, ~(~20666u), vec4<i32>(-u_input.b ^ arg_2.x, _wgslsmith_add_i32(0i, _wgslsmith_mult_i32(1i, u_input.d)) ^ -func_2(11115u, Struct_4(Struct_1(0u, false, u_input.a.x, vec4<i32>(arg_2.x, u_input.b, 2147483647i, u_input.d)), vec4<i32>(0i, 1i, -34405i, arg_2.x), arg_1.x, 4294967295u, vec4<i32>(arg_2.x, u_input.b, i32(-2147483648), -1i)), arg_2.x), ~arg_2.x, ~(arg_2.x | arg_2.x)));
    }
    var var_0 = ~u_input.a;
    let var_1 = _wgslsmith_div_i32(max(_wgslsmith_dot_vec4_i32(vec4<i32>(0i, arg_2.x, func_3(Struct_1(20542u, arg_1.x, u_input.c, vec4<i32>(5150i, u_input.d, u_input.d, u_input.b))).b.d.x, -22117i), abs(vec4<i32>(0i, 56539i, u_input.b, arg_2.x) >> (u_input.a % vec4<u32>(32u)))), _wgslsmith_clamp_i32(-31386i, ~arg_2.x, u_input.b) << (min(46679u, 27255u) % 32u)), 2147483647i);
    switch (var_1) {
        case -1i: {
        }
        case 37179i: {
            let var_2 = vec4<u32>(14626u, 14868u, ~(max(~u_input.c, 4294967295u) >> (min(_wgslsmith_mult_u32(var_0.x, u_input.c), u_input.a.x) % 32u)), ~(~func_3(Struct_1(0u, true, u_input.a.x, vec4<i32>(u_input.d, -92544i, -20563i, -28198i))).a.c) >> (~0u % 32u));
            for (var var_3: i32; var_3 != i32(-2147483648); ) {
                if (LOOP_COUNTERS[21u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
                let var_4 = Struct_2(vec4<u32>((66962u << (var_2.x % 32u)) >> (_wgslsmith_mult_u32(35943u, 1u) % 32u), ~_wgslsmith_div_u32(u_input.c, 1u), 4294967295u, var_2.x) << (_wgslsmith_mult_vec4_u32(vec4<u32>(~58047u, var_2.x ^ 21284u, firstTrailingBit(55217u), 1u), min(var_2, vec4<u32>(u_input.a.x, var_2.x, u_input.c, var_0.x) >> (var_2 % vec4<u32>(32u)))) % vec4<u32>(32u)), Struct_1(4294967295u, arg_1.x || !select(false, true, true), _wgslsmith_mult_u32(94977u, var_2.x), vec4<i32>(_wgslsmith_dot_vec4_i32(reverseBits(vec4<i32>(var_1, 2217i, u_input.d, 1i)), firstTrailingBit(vec4<i32>(1i, -31787i, -1i, var_1))), ~1i, 49977i, -11623i)));
            }
            let var_3 = 2154i;
            let var_4 = var_2.x;
        }
        case -836i: {
            let var_2 = arg_2;
            for (var var_3: i32; var_3 <= 0i; var_3 += 1i) {
                if (LOOP_COUNTERS[22u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            }
            if (_wgslsmith_f_op_f32(-arg_3) == arg_3) {
                var var_3 = true;
            }
            if (_wgslsmith_f_op_f32(min(arg_3, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_3 + _wgslsmith_f_op_vec3_f32(func_5(vec2<u32>(var_0.x, 1u))).x) * -2413f))) < _wgslsmith_f_op_f32(func_4(-vec4<i32>(-var_2.x, _wgslsmith_dot_vec2_i32(vec2<i32>(var_2.x, u_input.b), vec2<i32>(1i, u_input.d)), u_input.d, var_1), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(arg_3, arg_3)) * _wgslsmith_div_f32(-1000f, -733f)) * arg_3)))) {
                let var_3 = countOneBits(6347u);
                var_0 = select(vec4<u32>(24197u, _wgslsmith_dot_vec3_u32(~(~vec3<u32>(var_3, var_0.x, var_0.x)), firstLeadingBit(var_0.wzw)), 4294967295u, firstLeadingBit(select(u_input.c, var_3 << (var_3 % 32u), arg_1.x))), ~(~(~_wgslsmith_add_vec4_u32(u_input.a, vec4<u32>(var_0.x, u_input.a.x, u_input.c, 4294967295u)))), select(select(any(select(vec4<bool>(true, arg_0, false, arg_0), vec4<bool>(false, arg_1.x, true, true), vec4<bool>(false, false, arg_0, arg_1.x))), true, !(false || arg_0)), arg_0, func_1(Struct_4(Struct_1(0u, false, var_3, vec4<i32>(69192i, -34549i, var_1, 2147483647i)), vec4<i32>(28890i, arg_2.x, var_2.x, -26313i), true, 66739u, vec4<i32>(i32(-2147483648), -1i, var_2.x, 1i)), Struct_3(Struct_1(var_3, false, 1u, vec4<i32>(arg_2.x, u_input.b, 1i, var_1)), func_3(Struct_1(u_input.c, false, 0u, vec4<i32>(u_input.b, 0i, u_input.b, u_input.d))).b), !select(vec3<bool>(true, false, arg_0), vec3<bool>(false, true, arg_0), arg_0), !(933f < arg_3)).x));
                let var_4 = _wgslsmith_f_op_vec3_f32(func_5(var_0.xx)).x;
            }
            switch (arg_2.x) {
                default: {
                    var var_3 = ~(~arg_2.x);
                }
            }
        }
        default: {
            var var_2 = func_3(func_3(Struct_1(_wgslsmith_clamp_u32(_wgslsmith_sub_u32(u_input.c, var_0.x), ~var_0.x, func_3(Struct_1(31950u, arg_1.x, var_0.x, vec4<i32>(1i, -17546i, arg_2.x, 2147483647i))).b.c), false, u_input.a.x, abs(vec4<i32>(u_input.b, arg_2.x, -14467i, arg_2.x)) & vec4<i32>(-26906i, var_1, -861i, arg_2.x))).a).b;
            let var_3 = _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-arg_3))) - 138f)));
            if (true) {
            }
            var var_4 = Struct_4(Struct_1(_wgslsmith_mult_u32(max(~u_input.a.x, var_0.x), 0u), var_2.b, var_0.x, var_2.d), _wgslsmith_add_vec4_i32(-select(_wgslsmith_sub_vec4_i32(vec4<i32>(2147483647i, 52395i, 38121i, i32(-2147483648)), vec4<i32>(var_1, -59754i, i32(-2147483648), -24978i)), vec4<i32>(-14476i, 25451i, -22600i, 2147483647i), !arg_1.x), firstLeadingBit(var_2.d) << (~max(vec4<u32>(87316u, var_2.a, var_0.x, 48259u), vec4<u32>(4294967295u, 773u, var_2.a, 48765u)) % vec4<u32>(32u))), var_2.b, ~var_2.a, _wgslsmith_mod_vec4_i32(var_2.d, var_2.d));
        }
    }
    var var_2 = _wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(arg_3 + arg_3))), arg_3) + _wgslsmith_f_op_vec2_f32(min(_wgslsmith_f_op_vec2_f32(-vec2<f32>(966f, 937f)), _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_3, arg_3)), _wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_3, -248f))))))));
    return vec2<bool>(false, arg_1.x);
}

fn func_10(arg_0: i32, arg_1: vec2<bool>, arg_2: vec3<bool>, arg_3: vec3<f32>) -> Struct_3 {
    switch (~(-17553i)) {
        case 25869i: {
            for (var var_0 = -1i; var_0 == i32(-2147483648); var_0 = u_input.d) {
                if (LOOP_COUNTERS[23u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
            }
            loop {
                if (LOOP_COUNTERS[24u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
            }
        }
        case 12978i: {
            if (arg_1.x) {
                return func_3(Struct_1(_wgslsmith_sub_u32(u_input.c, 1u), true, ~(~u_input.c), abs(vec4<i32>(u_input.d ^ arg_0, ~(-22931i), _wgslsmith_mult_i32(i32(-2147483648), 1i), ~2147483647i))));
            }
            let var_0 = arg_2;
        }
        case -1i: {
            return Struct_3(Struct_1(u_input.a.x, true, ~17544u, vec4<i32>(func_2(u_input.c, Struct_4(Struct_1(4294967295u, arg_2.x, u_input.a.x, vec4<i32>(i32(-2147483648), u_input.d, arg_0, u_input.b)), vec4<i32>(u_input.d, arg_0, -21369i, -1i), arg_2.x, 4294967295u, vec4<i32>(-31009i, 1i, u_input.b, u_input.b)), _wgslsmith_dot_vec2_i32(vec2<i32>(arg_0, -20423i), vec2<i32>(0i, 0i))), u_input.b, 2147483647i, ~(0i))), func_3(func_8(vec4<u32>(~u_input.a.x, 78944u, u_input.c, ~1u), u_input.a.x, arg_2, vec3<u32>(u_input.c, abs(u_input.c), _wgslsmith_div_u32(1u, u_input.a.x))).b).a);
        }
        default: {
            let var_0 = func_8(u_input.a, _wgslsmith_add_u32(func_8(~(vec4<u32>(1u, u_input.a.x, u_input.a.x, u_input.a.x) & vec4<u32>(8686u, 0u, u_input.c, u_input.a.x)), 1u << ((u_input.a.x >> (36921u % 32u)) % 32u), arg_2, u_input.a.zyz).b.c, ~70904u), arg_2, select(u_input.a.wyw, ~(~select(vec3<u32>(14604u, 53913u, u_input.c), vec3<u32>(93390u, u_input.a.x, u_input.c), vec3<bool>(arg_2.x, arg_2.x, true))), !select(select(arg_2, arg_2, arg_2), select(vec3<bool>(arg_2.x, arg_2.x, arg_1.x), arg_2, true), arg_2.x)));
            for (var var_1 = 0i; func_8(u_input.a, u_input.c, select(select(vec3<bool>(false, var_0.a.b, false), arg_2, true), !select(vec3<bool>(false, false, var_0.a.b), vec3<bool>(arg_1.x, var_0.a.b, true), vec3<bool>(true, true, true)), select(func_3(func_8(vec4<u32>(u_input.c, u_input.c, 1u, var_0.a.c), var_0.b.a, vec3<bool>(arg_2.x, var_0.a.b, var_0.b.b), u_input.a.xyx).b).a.b, !var_0.a.b || true, false)), ~(~u_input.a.wwy)).b.b; var_1 += 1i) {
                if (LOOP_COUNTERS[25u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
                let var_2 = all(arg_1);
                var var_3 = countOneBits(_wgslsmith_sub_vec3_u32(vec3<u32>(~6972u, u_input.c, 11537u), ~min(vec3<u32>(4294967295u, u_input.c, 4294967295u), ~vec3<u32>(var_0.b.c, u_input.a.x, u_input.c))));
            }
            switch (_wgslsmith_mult_i32(-arg_0, u_input.b)) {
                default: {
                    let var_1 = func_3(func_8(reverseBits(vec4<u32>(u_input.c, _wgslsmith_mod_u32(51976u, 86733u), u_input.a.x, var_0.b.a)), 66917u & _wgslsmith_mult_u32(1u, _wgslsmith_div_u32(var_0.a.a, var_0.b.a)), vec3<bool>(true, true, any(vec4<bool>(true, true, true, true))), u_input.a.yzz).a).a;
                }
            }
            var var_1 = Struct_2(u_input.a, Struct_1(24567u, false, _wgslsmith_dot_vec4_u32(~u_input.a | ~vec4<u32>(54470u, u_input.c, 0u, var_0.b.c), vec4<u32>(~u_input.a.x, ~var_0.a.c, 7556u, u_input.c)), ~(var_0.b.d & -var_0.a.d)));
        }
    }
    let var_0 = ~vec3<i32>(_wgslsmith_div_i32(~1i, 1i), arg_0, -arg_0 ^ 1i);
    let var_1 = u_input.d;
    if (!arg_2.x) {
        if (arg_2.x) {
            var var_2 = func_3(Struct_1(60611u, !(!arg_2.x & arg_1.x), u_input.c, select(select(vec4<i32>(var_1, -2584i, -28764i, -1i), vec4<i32>(1i, u_input.d, i32(-2147483648), -65718i) << (vec4<u32>(u_input.c, u_input.c, u_input.a.x, 1u) % vec4<u32>(32u)), true), func_3(func_8(vec4<u32>(4294967295u, 1u, u_input.c, 4294967295u), 0u, arg_2, u_input.a.yyx).b).b.d, false))).b;
        }
        switch (_wgslsmith_dot_vec3_i32(-var_0, reverseBits(vec3<i32>(-14680i, firstLeadingBit(_wgslsmith_mod_i32(u_input.d, var_1)), _wgslsmith_sub_i32(var_0.x, _wgslsmith_dot_vec4_i32(vec4<i32>(arg_0, var_0.x, u_input.b, var_1), vec4<i32>(0i, 279i, var_0.x, i32(-2147483648)))))))) {
            case 11113i: {
                var var_2 = func_8(~vec4<u32>(_wgslsmith_dot_vec4_u32(vec4<u32>(0u, u_input.a.x, u_input.c, u_input.a.x), ~u_input.a), _wgslsmith_dot_vec3_u32(~u_input.a.zww, vec3<u32>(0u, 4294967295u, 31396u)), 23285u, ~_wgslsmith_dot_vec2_u32(vec2<u32>(u_input.c, 0u), u_input.a.xy)), u_input.a.x, !select(arg_2, vec3<bool>(!arg_1.x, true, arg_2.x), vec3<bool>(arg_2.x, arg_2.x, !arg_1.x)), _wgslsmith_mod_vec3_u32(~abs(u_input.a.www), ~abs(countOneBits(u_input.a.zyz))));
                let var_3 = var_0.x;
                var_2 = func_8(~vec4<u32>(func_8(~u_input.a, _wgslsmith_add_u32(22811u, var_2.b.a), !vec3<bool>(true, arg_1.x, false), _wgslsmith_mult_vec3_u32(u_input.a.wxz, vec3<u32>(var_2.b.c, var_2.a.c, 9165u))).b.a, min(u_input.c | var_2.a.c, ~var_2.b.a), firstLeadingBit(~u_input.c), 0u), 52430u, !select(select(select(arg_2, vec3<bool>(false, false, var_2.b.b), arg_2.x), arg_2, arg_2), select(select(vec3<bool>(arg_1.x, arg_1.x, var_2.a.b), arg_2, arg_2.x), arg_2, vec3<bool>(arg_2.x, true, true)), arg_1.x), vec3<u32>(~1u, var_2.b.c, u_input.a.x));
                var var_4 = _wgslsmith_f_op_f32(1838f - -755f);
            }
            default: {
                let var_2 = _wgslsmith_f_op_vec3_f32(max(arg_3, _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(arg_3 * arg_3) + _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(abs(arg_3)))))));
                let var_3 = func_3(func_3(func_8(countOneBits(_wgslsmith_add_vec4_u32(u_input.a, u_input.a)), 1u, select(arg_2, !vec3<bool>(false, arg_1.x, arg_2.x), vec3<bool>(arg_1.x, arg_2.x, arg_2.x)), vec3<u32>(_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a.x, 35778u, u_input.a.x), vec3<u32>(u_input.c, u_input.c, u_input.a.x)), u_input.a.x << (1u % 32u), ~u_input.a.x)).a).b);
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[26u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
        var var_2 = 71608u;
        switch (var_1) {
            case -1i: {
                let var_3 = 0i;
                continue;
            }
            default: {
            }
        }
    }
    return Struct_3(func_3(Struct_1(~1u, true, min(0u, u_input.c) ^ max(1u, u_input.a.x), _wgslsmith_div_vec4_i32(countOneBits(vec4<i32>(arg_0, var_0.x, var_1, -1i)), vec4<i32>(arg_0, u_input.d, var_0.x, var_0.x)))).a, func_3(Struct_1(_wgslsmith_sub_u32(1u, abs(u_input.c)), true, 55288u, min(-vec4<i32>(var_1, u_input.b, u_input.b, 0i), func_8(vec4<u32>(8241u, u_input.a.x, 95927u, 4294967295u), u_input.a.x, vec3<bool>(arg_2.x, false, true), u_input.a.yxz).a.d))).b);
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = func_10(2147483647i, select(vec2<bool>(true, true), select(func_9(true, func_1(Struct_4(Struct_1(44354u, false, 4294967295u, vec4<i32>(u_input.b, -6367i, u_input.d, u_input.d)), vec4<i32>(u_input.d, u_input.b, 0i, -55648i), true, 0u, vec4<i32>(77558i, u_input.b, u_input.b, u_input.b)), Struct_3(Struct_1(u_input.c, true, 44440u, vec4<i32>(0i, 0i, 2147483647i, u_input.d)), Struct_1(0u, true, 40371u, vec4<i32>(u_input.d, -12652i, i32(-2147483648), 1i))), vec3<bool>(true, false, true), true), vec2<i32>(u_input.b, u_input.b), _wgslsmith_f_op_f32(124f + 522f)), vec2<bool>(false, true), true), func_1(Struct_4(func_8(vec4<u32>(65392u, u_input.a.x, 1u, 0u), u_input.c, vec3<bool>(false, false, false), u_input.a.xwx).b, select(vec4<i32>(i32(-2147483648), 2147483647i, u_input.d, 2147483647i), vec4<i32>(i32(-2147483648), u_input.b, -17922i, u_input.b), true), true, select(0u, u_input.c, false), ~vec4<i32>(1i, u_input.b, u_input.b, u_input.b)), Struct_3(func_3(Struct_1(64572u, true, u_input.c, vec4<i32>(-32887i, 2147483647i, u_input.b, -40931i))).b, Struct_1(29538u, true, 1u, vec4<i32>(1i, i32(-2147483648), u_input.b, u_input.b))), vec3<bool>(true, true, true), !all(vec3<bool>(true, false, false)))), !(!vec3<bool>(func_8(vec4<u32>(19503u, 0u, 1u, 1u), 1u, vec3<bool>(false, false, false), vec3<u32>(u_input.a.x, 41362u, u_input.c)).b.b, func_1(Struct_4(Struct_1(4294967295u, true, u_input.c, vec4<i32>(0i, u_input.d, u_input.b, u_input.d)), vec4<i32>(-18892i, 14334i, u_input.d, -32048i), true, 18994u, vec4<i32>(u_input.d, -31702i, -40249i, u_input.b)), Struct_3(Struct_1(u_input.a.x, false, u_input.a.x, vec4<i32>(70797i, i32(-2147483648), -1i, -27295i)), Struct_1(u_input.c, true, 12440u, vec4<i32>(0i, u_input.d, u_input.b, -35505i))), vec3<bool>(false, false, true), false).x, func_9(false, vec2<bool>(false, true), vec2<i32>(2147483647i, u_input.d), -2056f).x)), _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-132f, 990f, -265f)) * vec3<f32>(_wgslsmith_f_op_f32(round(1000f)), _wgslsmith_f_op_f32(select(1257f, 808f, false)), _wgslsmith_f_op_f32(step(1650f, -851f)))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(-1517f, -1627f, -1842f) - vec3<f32>(634f, -411f, 385f)))))));
    var var_1 = !any(vec3<bool>(true, true, true));
    var_1 = var_0.a.b;
    if (var_0.b.b) {
    }
    let var_2 = vec4<u32>(1u, 1u, u_input.c, u_input.a.x);
    let var_3 = vec2<u32>(~(~var_2.x), 53052u) & var_2.xy;
    if (func_8(u_input.a, _wgslsmith_div_u32(func_10(var_0.b.d.x, select(vec2<bool>(var_0.a.b, var_0.a.b), vec2<bool>(true, var_0.b.b), u_input.c > var_2.x), vec3<bool>(func_9(var_0.b.b, vec2<bool>(var_0.a.b, var_0.a.b), var_0.a.d.yy, -289f).x, true, var_0.b.b), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(-602f, 530f, -929f) * vec3<f32>(1232f, -1661f, 787f)) - _wgslsmith_f_op_vec3_f32(vec3<f32>(-1075f, -1000f, -1025f) + vec3<f32>(574f, 1220f, -697f)))).b.c, _wgslsmith_mod_u32(48265u, 4294967295u) >> ((1u ^ func_3(Struct_1(0u, false, var_0.b.a, var_0.a.d)).b.a) % 32u)), vec3<bool>(!var_0.b.b, var_0.a.b, ~var_3.x == 15661u), firstTrailingBit(var_2.wxz)).a.b) {
        for (; ; ) {
            if (LOOP_COUNTERS[27u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
        }
        var_1 = _wgslsmith_dot_vec4_i32(var_0.b.d, ~(~(-vec4<i32>(u_input.b, u_input.d, var_0.a.d.x, 2147483647i)))) >= i32(-2147483648);
        var var_4 = ~u_input.c;
        let var_5 = min(~vec4<u32>(49958u, _wgslsmith_dot_vec2_u32(_wgslsmith_sub_vec2_u32(u_input.a.yw, var_3), func_7(Struct_3(var_0.a, Struct_1(var_3.x, true, 4294967295u, vec4<i32>(u_input.d, 2147483647i, u_input.d, u_input.d))), var_0.b.d.x).yx), ~reverseBits(var_0.b.a), ~_wgslsmith_clamp_u32(2647u, u_input.c, var_2.x)), ~vec4<u32>(firstLeadingBit(var_0.a.a), min(min(var_0.b.a, var_2.x), ~var_2.x), _wgslsmith_sub_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(4340u, u_input.a.x), u_input.a.yy), ~34332u), var_2.x));
        var var_6 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1000f, -142f, 3068f)))) + _wgslsmith_f_op_vec3_f32(min(vec3<f32>(-1148f, 1000f, -1424f), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-509f, 445f, -798f)))))) - _wgslsmith_f_op_vec3_f32(-vec3<f32>(297f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(1000f, 1000f)) + _wgslsmith_f_op_f32(select(850f, -1324f, false))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(2177f - 1528f)))));
    }
    for (var var_4 = i32(-2147483648); ; ) {
        if (LOOP_COUNTERS[28u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
        switch (-_wgslsmith_div_i32(-(~func_6(Struct_1(var_0.b.c, true, 0u, var_0.a.d), Struct_2(vec4<u32>(53389u, var_0.b.a, 55180u, var_2.x), var_0.b), 1u)), 56383i)) {
            case -1i: {
            }
            case 43683i: {
                let var_5 = Struct_3(var_0.a, var_0.b);
                var_4 = _wgslsmith_add_i32(0i, func_3(Struct_1(countOneBits(min(0u, var_2.x)), func_8(~vec4<u32>(var_0.b.a, var_2.x, 1u, var_5.a.c), func_10(42683i, vec2<bool>(var_0.b.b, var_0.b.b), vec3<bool>(true, var_5.a.b, var_5.b.b), vec3<f32>(-1000f, -355f, 3218f)).a.c, select(vec3<bool>(false, true, false), vec3<bool>(var_5.b.b, true, var_5.a.b), vec3<bool>(var_0.a.b, var_5.a.b, true)), ~vec3<u32>(4294967295u, var_5.b.c, var_2.x)).b.b, _wgslsmith_mod_u32(~0u, 40773u & var_2.x), -var_5.a.d)).a.d.x);
                var var_6 = _wgslsmith_f_op_f32(-777f);
                let var_7 = vec2<bool>(false, func_10(~(-27410i), select(vec2<bool>(var_5.a.b || true, true), select(vec2<bool>(true, var_0.b.b), func_1(Struct_4(var_0.b, vec4<i32>(var_5.a.d.x, var_0.a.d.x, 0i, -43927i), false, 35484u, var_5.b.d), Struct_3(Struct_1(3576u, false, var_5.b.c, vec4<i32>(var_5.b.d.x, u_input.b, -1i, var_5.a.d.x)), Struct_1(var_2.x, var_5.a.b, 4294967295u, var_5.b.d)), vec3<bool>(var_0.b.b, var_5.a.b, false), false), vec2<bool>(true, var_0.a.b)), vec2<bool>(true, true)), select(!select(vec3<bool>(var_5.b.b, false, var_0.b.b), vec3<bool>(true, var_5.b.b, false), vec3<bool>(var_5.b.b, false, var_0.a.b)), select(!vec3<bool>(var_5.b.b, var_5.b.b, var_5.a.b), vec3<bool>(true, false, var_5.a.b), select(vec3<bool>(var_0.b.b, var_5.a.b, var_0.a.b), vec3<bool>(false, var_0.a.b, false), var_0.a.b)), var_0.b.d.x < 44038i), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1986f, -269f, -562f))))).a.b);
                var_1 = func_9(all(!func_1(Struct_4(Struct_1(var_0.a.a, var_7.x, 0u, var_5.a.d), vec4<i32>(var_0.b.d.x, 2147483647i, var_0.b.d.x, var_0.a.d.x), var_7.x, var_2.x, var_0.b.d), func_10(u_input.b, vec2<bool>(var_7.x, var_5.a.b), vec3<bool>(false, var_7.x, true), vec3<f32>(395f, -981f, 579f)), vec3<bool>(false, var_7.x, var_7.x), select(false, true, var_7.x))), !func_1(Struct_4(var_5.a, ~var_0.b.d, 52327u != var_0.a.a, 29306u, var_0.a.d), func_3(var_5.b), vec3<bool>(true, var_7.x, true), true), -vec2<i32>(reverseBits(var_5.b.d.x), 1i), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -1000f))) + _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-1215f), _wgslsmith_f_op_f32(-1638f)))))).x;
            }
            case i32(-2147483648): {
                break;
            }
            case 12602i: {
            }
            default: {
                continue;
            }
        }
        var var_5 = vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-1112f), _wgslsmith_f_op_f32(func_4(vec4<i32>(1i, var_0.a.d.x, 23458i, var_0.b.d.x), -1000f)))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(845f - -344f))))));
        let var_6 = false;
        let var_7 = Struct_1(countOneBits(59270u), true, ~(~var_3.x), vec4<i32>(u_input.b, u_input.d, u_input.d, _wgslsmith_div_i32(i32(-1i) * -1114i, ~(-14946i))) >> (var_2 % vec4<u32>(32u)));
    }
    let x = u_input.a;
    s_output = StorageBuffer(107246u, -32098i, firstTrailingBit(~(~u_input.a.yyx)));
}

`;
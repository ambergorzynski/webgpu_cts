export const input = [246,218,212,178,30,159,130,31,42,158,146,77,39,5,98,122,17,89,74,240,174,48,30,171,175,99,119,51,215,183,174,116,251,241,208,166,145,216,5,61,3,125,27,216,113,152,161,4];

export const expected = [0,   0,   0,   0,  30, 159, 130,  31,  42, 158,
  146,  77,  39,   5,  98, 122,  17,  89,  74, 240,
  174,  48,  30, 171, 175,  99, 119,  51, 215, 183,
  174, 116, 251, 241, 208, 166, 145, 216,   5,  61,
    3, 125,  27, 216, 113, 152, 161,   4];
    
export const shaderCodeShort = `

struct UniformBuffer {
    a: u32,
    b: vec4<u32>,
    c: i32,
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
}
`;

export const shaderCode = `struct Struct_1 {
    a: vec4<i32>,
    b: vec3<bool>,
    c: f32,
}

struct Struct_2 {
    a: Struct_1,
    b: Struct_1,
}

struct Struct_3 {
    a: Struct_2,
    b: Struct_1,
    c: Struct_1,
}

struct UniformBuffer {
    a: u32,
    b: vec4<u32>,
    c: i32,
}

struct StorageBuffer {
    a: f32,
}

@group(0) @binding(0)
var<uniform> u_input: UniformBuffer;

@group(0) @binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<f32, 12> = array<f32, 12>(-1567f, -179f, 1348f, 1000f, 526f, 1000f, -240f, -322f, 710f, 1767f, 1121f, -1114f);

var<private> global1: array<vec4<i32>, 23> = array<vec4<i32>, 23>(vec4<i32>(-25634i, 0i, 1i, 2147483647i), vec4<i32>(2147483647i, 1i, 0i, 1i), vec4<i32>(-7458i, 1i, -34860i, -8217i), vec4<i32>(-1787i, 2147483647i, i32(-2147483648), -11687i), vec4<i32>(2147483647i, 13859i, 36128i, i32(-2147483648)), vec4<i32>(i32(-2147483648), 48730i, -66967i, 2147483647i), vec4<i32>(-6013i, 1i, 1i, -1i), vec4<i32>(-52269i, 1i, 1i, 17562i), vec4<i32>(i32(-2147483648), 0i, 7159i, -9297i), vec4<i32>(-35674i, 2147483647i, 33108i, 2147483647i), vec4<i32>(2147483647i, 0i, 0i, 0i), vec4<i32>(-19204i, 31288i, 28108i, 1i), vec4<i32>(11845i, 0i, -15144i, 27466i), vec4<i32>(i32(-2147483648), -52521i, -37872i, -33813i), vec4<i32>(10672i, -423i, -1i, 2147483647i), vec4<i32>(-20051i, i32(-2147483648), -1i, 0i), vec4<i32>(2147483647i, -14851i, 6846i, -1i), vec4<i32>(61683i, i32(-2147483648), 2147483647i, 61458i), vec4<i32>(7276i, 0i, -49566i, -3371i), vec4<i32>(32201i, 2147483647i, 2147483647i, 2147483647i), vec4<i32>(25067i, -2046i, -15207i, 13619i), vec4<i32>(1i, i32(-2147483648), -1i, 1i), vec4<i32>(-45298i, i32(-2147483648), 40480i, i32(-2147483648)));

var<private> LOOP_COUNTERS: array<u32, 8>;

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn func_6() -> f32 {
    return _wgslsmith_f_op_f32(f32(-1f) * -687f);
}

fn func_5() -> Struct_3 {
    let var_0 = u_input.b.wz;
    global1 = array<vec4<i32>, 23>();
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        global0 = array<f32, 12>();
        if (false) {
            continue;
        }
    }
    if (false) {
        global0 = array<f32, 12>();
        let var_1 = _wgslsmith_f_op_f32(func_6());
        global0 = array<f32, 12>();
        if (!(all(vec3<bool>(true, true, true)) | true)) {
        }
        let var_2 = !(u_input.b.x < (var_0.x & var_0.x));
    }
    var var_1 = Struct_2(Struct_1(_wgslsmith_clamp_vec4_i32(global1[_wgslsmith_index_u32(var_0.x, 23u)], min(vec4<i32>(u_input.c, 78093i, u_input.c, 15i), -global1[_wgslsmith_index_u32(var_0.x, 23u)]), ~global1[_wgslsmith_index_u32(1u, 23u)]), vec3<bool>(false, true, _wgslsmith_f_op_f32(func_6()) >= _wgslsmith_f_op_f32(floor(global0[_wgslsmith_index_u32(u_input.b.x, 12u)]))), global0[_wgslsmith_index_u32(~firstLeadingBit(~0u), 12u)]), Struct_1(select(global1[_wgslsmith_index_u32(_wgslsmith_mult_u32(1u << (var_0.x % 32u), u_input.a), 23u)], ~abs(global1[_wgslsmith_index_u32(1u, 23u)]), all(vec3<bool>(false, true, true))), !(!select(vec3<bool>(true, false, false), vec3<bool>(false, false, false), true)), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-1f), _wgslsmith_f_op_f32(-679f - global0[_wgslsmith_index_u32(var_0.x, 12u)])))));
    return Struct_3(Struct_2(var_1.a, Struct_1(var_1.a.a, !vec3<bool>(var_1.a.b.x, true, var_1.a.b.x), 1000f)), Struct_1(vec4<i32>(_wgslsmith_sub_i32(73435i, _wgslsmith_add_i32(24306i, u_input.c)), _wgslsmith_clamp_i32(i32(-2147483648), -66682i, _wgslsmith_mult_i32(var_1.a.a.x, var_1.a.a.x)), u_input.c, firstTrailingBit(abs(7440i))), var_1.b.b, global0[_wgslsmith_index_u32(_wgslsmith_clamp_u32(_wgslsmith_sub_u32(var_0.x, u_input.a), u_input.b.x, var_0.x), 12u)]), Struct_1(max(vec4<i32>(8347i, _wgslsmith_mult_i32(var_1.a.a.x, var_1.a.a.x), min(var_1.b.a.x, 267i), ~(-9964i)), firstLeadingBit(global1[_wgslsmith_index_u32(4294967295u, 23u)])), vec3<bool>(var_1.a.b.x, firstTrailingBit(31557u) <= select(u_input.b.x, u_input.a, var_1.a.b.x), true), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(51708u, 12u)] + -258f)))));
}

fn func_7(arg_0: Struct_1, arg_1: i32, arg_2: Struct_3, arg_3: Struct_3) -> vec4<i32> {
    let var_0 = func_5();
    let var_1 = func_5();
    global1 = array<vec4<i32>, 23>();
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
    }
    for (var var_2 = -35182i; var_2 == -3987i; global1 = array<vec4<i32>, 23>()) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
    }
    return vec4<i32>(_wgslsmith_sub_i32(_wgslsmith_clamp_i32(arg_1, -3110i, i32(-2147483648)), countOneBits(arg_3.b.a.x)) << (~(~u_input.b.x) % 32u), ~(-701i), -(~var_1.c.a.x), _wgslsmith_mult_i32(arg_1, 14737i)) | firstLeadingBit(vec4<i32>(-57582i, max(select(2147483647i, arg_1, false), _wgslsmith_dot_vec2_i32(var_0.c.a.xw, vec2<i32>(-2047i, var_1.b.a.x))), -56962i, ~arg_0.a.x));
}

fn func_4(arg_0: f32) -> Struct_1 {
    let var_0 = ~u_input.c;
    var var_1 = Struct_2(Struct_1(~global1[_wgslsmith_index_u32(1u ^ _wgslsmith_add_u32(u_input.b.x, 12269u), 23u)], vec3<bool>(false, true, true), arg_0), Struct_1(_wgslsmith_add_vec4_i32(func_7(Struct_1(vec4<i32>(0i, -7791i, u_input.c, u_input.c), vec3<bool>(false, false, false), 1160f), _wgslsmith_div_i32(-47441i, var_0), func_5(), func_5()), ~abs(vec4<i32>(1i, var_0, -1i, var_0))), vec3<bool>(all(select(vec3<bool>(false, true, true), vec3<bool>(true, true, true), vec3<bool>(false, true, false))), true && all(vec3<bool>(true, true, false)), true), arg_0));
    if (any(vec3<bool>(var_1.b.b.x, var_1.b.b.x, false)) && true) {
        global0 = array<f32, 12>();
        var var_2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-923f, -519f, -1000f, 1391f))))));
        if (all(select(vec4<bool>(1u <= (u_input.b.x << (22201u % 32u)), true, all(var_1.b.b.zz), false), vec4<bool>((u_input.c | -1i) <= var_1.a.a.x, any(!vec3<bool>(var_1.b.b.x, false, var_1.b.b.x)), !all(var_1.b.b), all(vec3<bool>(var_1.a.b.x, false, var_1.b.b.x))), !(!(!vec4<bool>(var_1.a.b.x, false, var_1.a.b.x, false)))))) {
            var_2 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(-1000f), -329f, var_2.x, _wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-518f), _wgslsmith_f_op_f32(-arg_0)) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-898f + 998f)))));
        }
        var var_3 = func_5();
        var var_4 = _wgslsmith_sub_vec3_u32(vec3<u32>(0u, ~u_input.a, ~75293u), min(~vec3<u32>(abs(4294967295u), ~1u, u_input.a), u_input.b.xxz));
    }
    if (any(vec2<bool>(true, true))) {
    }
    var_1 = Struct_2(Struct_1(global1[_wgslsmith_index_u32(~_wgslsmith_div_u32(31831u, 48867u), 23u)], !(!vec3<bool>(false, false, var_1.b.b.x)), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(var_1.b.c)))))), func_5().a.a);
    return func_5().b;
}

fn func_8(arg_0: f32, arg_1: vec4<u32>, arg_2: vec3<u32>, arg_3: Struct_1) -> vec4<i32> {
    let var_0 = Struct_3(Struct_2(arg_3, arg_3), arg_3, func_5().a.b);
    global0 = array<f32, 12>();
    global1 = array<vec4<i32>, 23>();
    if (true) {
        var var_1 = !var_0.c.b.x;
        global0 = array<f32, 12>();
    }
    switch (~(i32(-1i) * -var_0.a.a.a.x)) {
        case 0i: {
            var var_1 = _wgslsmith_f_op_f32(1351f + _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(~4294967295u, 12u)] - _wgslsmith_f_op_f32(max(global0[_wgslsmith_index_u32(61318u, 12u)], arg_0)))))));
            var_1 = 839f;
        }
        case i32(-2147483648): {
            for (; ; ) {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            }
            let var_1 = Struct_1(_wgslsmith_mult_vec4_i32(global1[_wgslsmith_index_u32(abs(39218u), 23u)] & vec4<i32>(_wgslsmith_add_i32(-37051i, 10494i), -var_0.c.a.x, ~2147483647i, -28186i), vec4<i32>(var_0.c.a.x, _wgslsmith_dot_vec3_i32(var_0.c.a.wxx, vec3<i32>(arg_3.a.x, arg_3.a.x, -44308i)), abs(-1i), u_input.c)), func_4(_wgslsmith_f_op_f32(-535f)).b, -1514f);
            switch (i32(-2147483648)) {
                default: {
                    var var_2 = var_0.a.b.a.zx;
                    global0 = array<f32, 12>();
                    let var_3 = -420f;
                    var var_4 = Struct_3(var_0.a, func_5().b, var_0.c);
                }
            }
            switch (firstLeadingBit(-10053i)) {
                case i32(-2147483648): {
                }
                case 1i: {
                    var var_2 = func_5().b;
                    var var_3 = vec2<bool>(false, true);
                }
                case -64496i: {
                    var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0));
                }
                default: {
                    let var_2 = 796f;
                    var var_3 = func_4(955f);
                    global0 = array<f32, 12>();
                    let var_4 = var_1;
                    var_3 = Struct_1(min(-_wgslsmith_mult_vec4_i32(vec4<i32>(u_input.c, -1i, var_4.a.x, var_4.a.x), vec4<i32>(3595i, -1i, u_input.c, 0i)), countOneBits(var_0.b.a & var_4.a)), !vec3<bool>(any(var_1.b), true, !any(var_3.b)), var_4.c);
                }
            }
        }
        default: {
            global0 = array<f32, 12>();
            if (arg_3.b.x) {
                let var_1 = reverseBits(2147483647i);
                global1 = array<vec4<i32>, 23>();
                var var_2 = 1u;
            }
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            }
            let var_1 = func_5().a;
            global1 = array<vec4<i32>, 23>();
        }
    }
    return ~global1[_wgslsmith_index_u32(arg_2.x, 23u)];
}

fn func_3(arg_0: vec4<bool>, arg_1: vec2<i32>) -> Struct_1 {
    for (var var_0: i32; true; var_0 += 1i) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        global1 = array<vec4<i32>, 23>();
        var var_1 = Struct_1(func_8(_wgslsmith_f_op_f32(floor(global0[_wgslsmith_index_u32(_wgslsmith_div_u32(u_input.b.x, ~1u), 12u)])), ~firstLeadingBit(vec4<u32>(1u, u_input.a, 56501u, u_input.a)), ~vec3<u32>(0u, reverseBits(1u), abs(u_input.b.x)), func_4(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -667f) * global0[_wgslsmith_index_u32(~u_input.b.x, 12u)]))), arg_0.zzw, 919f);
        var var_2 = u_input.b.wzx;
    }
    switch (-_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.c, arg_1.x, _wgslsmith_add_i32(i32(-2147483648), arg_1.x), firstLeadingBit(_wgslsmith_dot_vec2_i32(vec2<i32>(arg_1.x, u_input.c), vec2<i32>(2147483647i, 1i)))), ~(global1[_wgslsmith_index_u32(0u, 23u)] ^ (vec4<i32>(-1i, arg_1.x, u_input.c, 1i) >> (vec4<u32>(u_input.a, 0u, u_input.a, 40906u) % vec4<u32>(32u)))))) {
        case 21900i: {
        }
        case 38118i: {
            global0 = array<f32, 12>();
            if (!func_5().c.b.x) {
                let var_0 = func_5().a;
            }
        }
        default: {
            var var_0 = u_input.c;
            global1 = array<vec4<i32>, 23>();
        }
    }
    let var_0 = -1641f;
    var var_1 = vec3<i32>(~_wgslsmith_dot_vec4_i32(reverseBits(global1[_wgslsmith_index_u32(17623u, 23u)]) | vec4<i32>(arg_1.x, -1i, u_input.c, 40921i), select(global1[_wgslsmith_index_u32(u_input.b.x, 23u)], global1[_wgslsmith_index_u32(u_input.b.x, 23u)], arg_0) & (global1[_wgslsmith_index_u32(4294967295u, 23u)] | global1[_wgslsmith_index_u32(4294967295u, 23u)])), -1i, -(i32(-1i) * -(-1i >> (u_input.b.x % 32u))));
    global0 = array<f32, 12>();
    return Struct_1(vec4<i32>(~var_1.x, ~22056i, 15503i, ~(i32(-2147483648))), vec3<bool>(func_4(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(var_0 - var_0)))).b.x, select(any(arg_0), _wgslsmith_dot_vec2_i32(vec2<i32>(arg_1.x, u_input.c), vec2<i32>(1i, i32(-2147483648))) > firstTrailingBit(39256i), arg_0.x), arg_0.x && any(vec3<bool>(false, arg_0.x, arg_0.x))), var_0);
}

fn func_9(arg_0: Struct_2) -> Struct_2 {
    var var_0 = func_3(vec4<bool>(all(vec3<bool>(!arg_0.a.b.x, true, 18969i >= arg_0.b.a.x)), false, true, arg_0.a.b.x | arg_0.b.b.x), func_5().c.a.xy);
    let var_1 = Struct_2(Struct_1(~(-vec4<i32>(1i, arg_0.b.a.x, u_input.c, var_0.a.x) << (_wgslsmith_mod_vec4_u32(u_input.b, u_input.b) % vec4<u32>(32u))), func_4(1f).b, _wgslsmith_f_op_f32(ceil(442f))), func_4(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(arg_0.a.c, _wgslsmith_f_op_f32(var_0.c - global0[_wgslsmith_index_u32(u_input.b.x, 12u)]))))));
    global1 = array<vec4<i32>, 23>();
    global1 = array<vec4<i32>, 23>();
    if (true) {
    }
    return func_5().a;
}

fn func_2() -> Struct_2 {
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
    }
    var var_0 = func_9(Struct_2(Struct_1(~global1[_wgslsmith_index_u32(25627u, 23u)] | global1[_wgslsmith_index_u32(_wgslsmith_clamp_u32(u_input.b.x, 4294967295u, 1u), 23u)], select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), true), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(global0[_wgslsmith_index_u32(0u, 12u)], global0[_wgslsmith_index_u32(0u, 12u)])) * _wgslsmith_f_op_f32(trunc(-1317f)))), func_3(vec4<bool>(u_input.c <= u_input.c, true, true, select(false, false, false)), vec2<i32>(i32(-1i) * -25911i, -1584i))));
    var_0 = func_9(Struct_2(Struct_1(var_0.a.a, vec3<bool>(var_0.a.b.x && false, true, false && var_0.a.b.x), -1771f), Struct_1(~func_5().c.a, var_0.a.b, var_0.a.c)));
    if (true) {
    }
    var var_1 = _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-968f * global0[_wgslsmith_index_u32(countOneBits(4294967295u & u_input.a) >> (0u % 32u), 12u)]), _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(_wgslsmith_sub_u32(firstLeadingBit(abs(u_input.b.x)), _wgslsmith_dot_vec2_u32(u_input.b.wz | u_input.b.zz, u_input.b.xy)), 12u)] - global0[_wgslsmith_index_u32(u_input.a, 12u)]), var_0.a.b.x));
    return func_9(func_9(Struct_2(Struct_1(func_8(-903f, u_input.b, u_input.b.xwy, Struct_1(vec4<i32>(var_0.b.a.x, u_input.c, -22123i, var_0.b.a.x), var_0.b.b, -1057f)), vec3<bool>(false, var_0.a.b.x, false), 883f), var_0.b)));
}

fn func_1(arg_0: bool) -> bool {
    var var_0 = func_2();
    global1 = array<vec4<i32>, 23>();
    let var_1 = u_input.b.x;
    let var_2 = _wgslsmith_mult_i32(select(2147483647i, _wgslsmith_mult_i32(i32(-1i) * -57603i, 2147483647i >> (var_1 % 32u)), func_5().a.a.b.x), ~(-func_2().b.a.x));
    global0 = array<f32, 12>();
    return arg_0;
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = u_input.a & ((abs(~u_input.b.x) >> (107380u % 32u)) ^ ~u_input.a);
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        let var_1 = func_1(any(select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), true)));
        global0 = array<f32, 12>();
        let var_2 = reverseBits(~1u);
        continue;
    }
    let var_1 = 47527u;
    global0 = array<f32, 12>();
    switch (u_input.c) {
        default: {
            var var_2 = vec4<bool>(true, 1i > u_input.c, var_1 > _wgslsmith_mod_u32(_wgslsmith_mod_u32(~var_1, u_input.b.x), ~(var_1 | 1u)), !(!all(vec3<bool>(true, false, true))));
        }
    }
    var var_2 = Struct_1(global1[_wgslsmith_index_u32(var_1, 23u)], func_3(!vec4<bool>(true, func_2().b.b.x, true, var_1 < u_input.a), func_4(global0[_wgslsmith_index_u32(var_1, 12u)]).a.yw << (vec2<u32>(4294967295u & var_0, var_0) % vec2<u32>(32u))).b, 1000f);
    global0 = array<f32, 12>();
    if (false & (_wgslsmith_f_op_f32(-1085f) != _wgslsmith_div_f32(_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(_wgslsmith_sub_u32(4294967295u, var_0), 12u)]), _wgslsmith_f_op_f32(trunc(func_4(-1572f).c))))) {
    }
    let x = u_input.a;
    s_output = StorageBuffer(global0[_wgslsmith_index_u32(~min(min(_wgslsmith_clamp_u32(52959u, var_0, var_0), ~25065u), _wgslsmith_dot_vec3_u32(vec3<u32>(6745u, u_input.b.x, 1u) ^ vec3<u32>(var_1, 74073u, 0u), ~u_input.b.wwy)), 12u)]);
}

`;
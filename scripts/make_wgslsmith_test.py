import os
import subprocess

def main():

    wgslsmith="/data/dev/wgslsmith/target/release/wgslsmith"
    base="/data/dev/webgpu_cts_fork"
    wgslsmith_prog=f'{base}/wgslsmith_tests/out.wgsl'
    cts_format_prog=f'{base}/wgslsmith_tests/shader.js'

    # Gen test
    cmd_gen = [wgslsmith, 'gen', '--recondition', '-o', wgslsmith_prog]

    result = subprocess.run(cmd_gen)

    # Extract inputs
    with open(wgslsmith_prog,'r') as f:
        program = f.readlines()

    shader = program[3:]

    input = program[0][10:-2]

    output = '0'
    
    for x in range(input.count(',')+1):
        output += ',0'

    # Write in template
    with open(cts_format_prog,'w') as f:
        f.writelines(f'export const input = {input};\n')
        f.writelines(f'export const expected = [{output}];\n')
        f.writelines("export const shaderCode = `\n")
        f.writelines(shader)
        f.writelines('`;')

if __name__=="__main__":
    main()
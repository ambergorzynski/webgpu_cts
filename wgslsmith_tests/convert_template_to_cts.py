import argparse

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument("input")
    parser.add_argument("output")

    args = parser.parse_args()

    with open(args.input,'r') as f:
        lines = f.readlines()

    lines = [x.replace("export const ","exports.") for x in lines]
    
    code = ['"use strict";\n',
        'Object.defineProperty(exports, "__esModule", { value: true });\n',
        "exports.shaderCode = exports.expected = exports.input = void 0;\n"]
    
    code.extend(lines)

    with open(args.output,'w') as f:
        f.writelines(code)

if __name__=="__main__":
    main()
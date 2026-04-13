

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


function DumpFunction(...args) {
    let code = "function anonymous(";
    code += args.slice(0, -1).join(", ");
    code += ") {\n";
    code += args[args.length -1];
    code += "\n}";
    eval(code);
}

const tests = [
    ["/*", "*/) {"],
    ["//", ") {"],
    ["a = `", "` ) {"],
    [") { var x = function (", "} "],
    ["x = function (", "}) {"]
];

for (const test of tests) {
    DumpFunction(...test);
    assertThrowsInstanceOf(() => new Function(...test), SyntaxError);
}


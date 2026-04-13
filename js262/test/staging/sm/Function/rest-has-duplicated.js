

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

function f0(a, a) {
}


assertThrowsInstanceOf(() => eval(`
function f1(a, ...a) {
}
`), SyntaxError);


assertThrowsInstanceOf(() => eval(`
function f2(a, a, ...b) {
}
`), SyntaxError);




/*---
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

function f0(a, a) {
}


assert.throws(SyntaxError, () => eval(`
function f1(a, ...a) {
}
`));


assert.throws(SyntaxError, () => eval(`
function f2(a, a, ...b) {
}
`));


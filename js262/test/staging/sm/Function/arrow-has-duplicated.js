

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
(a, a) => {
};
`));
assert.throws(SyntaxError, () => eval(`
(a, ...a) => {
};
`));


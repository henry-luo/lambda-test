

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

function f0(a) {
}


assertThrowsInstanceOf(() => eval(`
({
  m1(a, a) {
  }
});
`), SyntaxError);
assertThrowsInstanceOf(() => eval(`
({
  m2(a, ...a) {
  }
});
`), SyntaxError);




/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


function g8(h = () => arguments) {
  var arguments = 0;
  assert.sameValue(arguments, 0);
  assert.sameValue(arguments === h(), false);
}
g8();

function g9(h = () => arguments) {
  var arguments;
  assert.sameValue(void 0 === arguments, false);
  assert.sameValue(h(), arguments);
  arguments = 0;
  assert.sameValue(arguments, 0);
  assert.sameValue(arguments === h(), false);
}
g9();




/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


(function() {
  assert.sameValue(typeof arguments, "object");
  { function arguments() {} }
  assert.sameValue(typeof arguments, "function");
})();


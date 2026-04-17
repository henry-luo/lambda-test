

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-RegExp-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var regexp;

regexp = /(?=)/;
assert.sameValue(regexp.test('test'), true);


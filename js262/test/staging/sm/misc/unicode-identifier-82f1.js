

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var o = {}
try {
    eval('o.\\u82f1 = 42;');
}
catch (e) {
    assert.sameValue('should not fail', true);
}
assert.sameValue(o['\u82f1'], 42);




/*---
description: |
  RegExp.prototype[@@split] should check this value.
info: bugzilla.mozilla.org/show_bug.cgi?id=887016
esid: pending
---*/

for (var v of [null, 1, true, undefined, "", Symbol.iterator]) {
  assert.throws(TypeError, () => RegExp.prototype[Symbol.split].call(v));
}

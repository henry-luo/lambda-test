

/*---
includes: [compareArray.js]
description: |
  RegExp.prototype[@@split] should check if this value is RegExp.
info: bugzilla.mozilla.org/show_bug.cgi?id=887016
esid: pending
---*/

var obj = { flags: "", toString: () => "-" };
assert.compareArray(RegExp.prototype[Symbol.split].call(obj, "a-b-c"),
             ["a", "b", "c"]);

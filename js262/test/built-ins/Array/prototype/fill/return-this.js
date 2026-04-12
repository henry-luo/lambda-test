

/*---
esid: sec-array.prototype.fill
description: >
  Returns `this`.
info: |
  12. Return O.
---*/

var arr = [];
var result = arr.fill(1);

assert.sameValue(result, arr);

var o = {
  length: 0
};
result = Array.prototype.fill.call(o);
assert.sameValue(result, o);

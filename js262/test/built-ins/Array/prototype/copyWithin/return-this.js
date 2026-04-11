

/*---
esid: sec-array.prototype.copywithin
description: >
  Returns `this`.
info: |
  22.1.3.3 Array.prototype.copyWithin (target, start [ , end ] )

  18. Return O.
---*/

var arr = [];
var result = arr.copyWithin(0, 0);

assert.sameValue(result, arr);

var o = {
  length: 0
};
result = Array.prototype.copyWithin.call(o, 0, 0);
assert.sameValue(result, o);

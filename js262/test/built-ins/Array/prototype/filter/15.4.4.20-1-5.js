

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter applied to number primitive
---*/

function callbackfn(val, idx, obj) {
  return obj instanceof Number;
}

Number.prototype[0] = 1;
Number.prototype.length = 1;

var newArr = Array.prototype.filter.call(2.5, callbackfn);

assert.sameValue(newArr[0], 1, 'newArr[0]');

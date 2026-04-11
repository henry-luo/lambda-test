

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter applied to string primitive
---*/

function callbackfn(val, idx, obj) {
  return obj instanceof String;
}

var newArr = Array.prototype.filter.call("abc", callbackfn);

assert.sameValue(newArr[0], "a", 'newArr[0]');

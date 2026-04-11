

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter applied to String object
---*/

function callbackfn(val, idx, obj) {
  return obj instanceof String;
}

var obj = new String("abc");
var newArr = Array.prototype.filter.call(obj, callbackfn);

assert.sameValue(newArr[0], "a", 'newArr[0]');

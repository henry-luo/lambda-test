

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter applied to String object, which implements
    its own property get method
---*/

function callbackfn(val, idx, obj) {
  return obj.length === 3;
}

var str = new String("012");

var newArr = Array.prototype.filter.call(str, callbackfn);

assert.sameValue(newArr.length, 3, 'newArr.length');

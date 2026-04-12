

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter applied to Function object, which
    implements its own property get method
---*/

function callbackfn(val, idx, obj) {
  return obj.length === 2;
}

var fun = function(a, b) {
  return a + b;
};
fun[0] = 12;
fun[1] = 11;
fun[2] = 9;

var newArr = Array.prototype.filter.call(fun, callbackfn);

assert.sameValue(newArr.length, 2, 'newArr.length');



/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - applied to Function object, which implements
    its own property get method
---*/

function callbackfn(val, idx, obj) {
  return val > 10;
}

var fun = function(a, b) {
  return a + b;
};
fun[0] = 12;
fun[1] = 11;
fun[2] = 9;

var testResult = Array.prototype.map.call(fun, callbackfn);

assert.sameValue(testResult.length, 2, 'testResult.length');

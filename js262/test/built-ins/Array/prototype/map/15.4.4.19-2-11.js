

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - applied to Array-like object when 'length'
    is an own accessor property without a get function
---*/

function callbackfn(val, idx, obj) {
  return val > 10;
}

var obj = {
  0: 11,
  1: 12
};
Object.defineProperty(obj, "length", {
  set: function() {},
  configurable: true
});

var testResult = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(testResult.length, 0, 'testResult.length');

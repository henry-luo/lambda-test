

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - applied to the Array-like object that
    'length' property doesn't exist
---*/

function callbackfn(val, idx, obj) {
  return val > 10;
}

var obj = {
  0: 11,
  1: 12
};

var testResult = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(testResult.length, 0, 'testResult.length');

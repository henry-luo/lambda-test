

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - no observable effects occur if length is 0
    on an Array-like object
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return val > 10;
}

var obj = {
  0: 11,
  1: 12,
  length: 0
};

var testResult = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(testResult.length, 0, 'testResult.length');
assert.sameValue(accessed, false, 'accessed');

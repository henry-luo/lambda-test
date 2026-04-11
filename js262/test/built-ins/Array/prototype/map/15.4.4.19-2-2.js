

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - when 'length' is own data property on an
    Array
---*/

function callbackfn(val, idx, obj) {
  return val > 10;
}

var testResult = [12, 11].map(callbackfn);

assert.sameValue(testResult.length, 2, 'testResult.length');



/*---
esid: sec-array.prototype.map
description: Array.prototype.map - the JSON object can be used as thisArg
---*/

function callbackfn(val, idx, obj) {
  return this === JSON;
}

var testResult = [11].map(callbackfn, JSON);

assert.sameValue(testResult[0], true, 'testResult[0]');

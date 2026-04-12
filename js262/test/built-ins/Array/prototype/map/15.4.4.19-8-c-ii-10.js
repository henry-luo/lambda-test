

/*---
esid: sec-array.prototype.map
description: Array.prototype.map - callbackfn is called with 1 formal parameter
---*/

function callbackfn(val) {
  return val > 10;
}

var testResult = [11].map(callbackfn);

assert.sameValue(testResult[0], true, 'testResult[0]');

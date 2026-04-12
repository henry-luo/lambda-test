

/*---
esid: sec-array.prototype.map
description: Array.prototype.map - callbackfn with 0 formal parameter
---*/

function callbackfn() {
  return true;
}

var testResult = [11].map(callbackfn);

assert.sameValue(testResult[0], true, 'testResult[0]');

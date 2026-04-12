

/*---
esid: sec-array.prototype.map
description: Array.prototype.map - callbackfn is called with 2 formal parameters
---*/

function callbackfn(val, idx) {
  return (val > 10 && arguments[2][idx] === val);
}

var testResult = [11].map(callbackfn);

assert.sameValue(testResult[0], true, 'testResult[0]');

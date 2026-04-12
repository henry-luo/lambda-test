

/*---
esid: sec-array.prototype.map
description: Array.prototype.map - built-in functions can be used as thisArg
---*/

function callbackfn(val, idx, obj) {
  return this === eval;
}

var testResult = [11].map(callbackfn, eval);

assert.sameValue(testResult[0], true, 'testResult[0]');



/*---
esid: sec-array.prototype.map
description: Array.prototype.map - boolean primitive can be used as thisArg
---*/

function callbackfn(val, idx, obj) {
  return this.valueOf() === false;
}

var testResult = [11].map(callbackfn, false);

assert.sameValue(testResult[0], true, 'testResult[0]');

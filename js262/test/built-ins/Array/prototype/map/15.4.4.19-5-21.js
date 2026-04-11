

/*---
esid: sec-array.prototype.map
description: Array.prototype.map - the global object can be used as thisArg
---*/

var global = this;

function callbackfn(val, idx, obj) {
  return this === global;
}

var testResult = [11].map(callbackfn, this);

assert.sameValue(testResult[0], true, 'testResult[0]');

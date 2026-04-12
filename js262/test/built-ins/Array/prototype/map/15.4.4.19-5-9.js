

/*---
esid: sec-array.prototype.map
description: Array.prototype.map - Function object can be used as thisArg
---*/

var objFunction = function() {};

function callbackfn(val, idx, obj) {
  return this === objFunction;
}

var testResult = [11].map(callbackfn, objFunction);

assert.sameValue(testResult[0], true, 'testResult[0]');

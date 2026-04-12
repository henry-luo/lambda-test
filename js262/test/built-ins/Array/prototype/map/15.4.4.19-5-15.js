

/*---
esid: sec-array.prototype.map
description: Array.prototype.map - Date object can be used as thisArg
---*/

var objDate = new Date(0);

function callbackfn(val, idx, obj) {
  return this === objDate;
}

var testResult = [11].map(callbackfn, objDate);

assert.sameValue(testResult[0], true, 'testResult[0]');

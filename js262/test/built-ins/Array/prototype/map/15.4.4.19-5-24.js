

/*---
esid: sec-array.prototype.map
description: Array.prototype.map - string primitive can be used as thisArg
---*/

function callbackfn(val, idx, obj) {
  return this.valueOf() === "abc";
}

var testResult = [11].map(callbackfn, "abc");

assert.sameValue(testResult[0], true, 'testResult[0]');

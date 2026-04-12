

/*---
esid: sec-array.prototype.lastindexof
description: Array.prototype.lastIndexOf - 'length' is a number of value -6e-1
---*/

var targetObj = [];
var obj = {
  0: targetObj,
  100: targetObj,
  length: -6e-1
};

assert.sameValue(Array.prototype.lastIndexOf.call(obj, targetObj), -1, 'Array.prototype.lastIndexOf.call(obj, targetObj)');

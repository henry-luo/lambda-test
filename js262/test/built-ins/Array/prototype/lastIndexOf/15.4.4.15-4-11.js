

/*---
esid: sec-array.prototype.lastindexof
description: Array.prototype.lastIndexOf - 'length' is an empty string
---*/

var targetObj = [];
var obj = {
  0: targetObj,
  100: targetObj,
  length: ""
};

assert.sameValue(Array.prototype.lastIndexOf.call(obj, targetObj), -1, 'Array.prototype.lastIndexOf.call(obj, targetObj)');

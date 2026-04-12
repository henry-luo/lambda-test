

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf - 'length' is a number of value 0.1
---*/

var targetObj = [];
var obj = {
  0: targetObj,
  100: targetObj,
  length: 0.1
};

assert.sameValue(Array.prototype.indexOf.call(obj, targetObj), -1, 'Array.prototype.indexOf.call(obj, targetObj)');

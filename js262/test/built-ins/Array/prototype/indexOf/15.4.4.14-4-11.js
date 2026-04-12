

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf - 'length' is an empty string
---*/

var targetObj = [];
var obj = {
  0: targetObj,
  100: targetObj,
  length: ""
};

assert.sameValue(Array.prototype.indexOf.call(obj, targetObj), -1, 'Array.prototype.indexOf.call(obj, targetObj)');



/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - value of 'length' is a string that
    can't convert to a number
---*/

var targetObj = new String("123abc123");
var obj = {
  0: targetObj,
  length: "123abc123"
};

assert.sameValue(Array.prototype.lastIndexOf.call(obj, targetObj), -1, 'Array.prototype.lastIndexOf.call(obj, targetObj)');

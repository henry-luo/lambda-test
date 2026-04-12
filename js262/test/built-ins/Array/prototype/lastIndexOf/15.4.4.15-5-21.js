

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' which is an
    Object, and has an own toString method
---*/


var fromIndex = {
  toString: function() {
    return '2';
  }
};
var targetObj = new RegExp();

assert.sameValue([0, true, targetObj, 3, false].lastIndexOf(targetObj, fromIndex), 2, '[0, true, targetObj, 3, false].lastIndexOf(targetObj, fromIndex)');
assert.sameValue([0, true, 3, targetObj, false].lastIndexOf(targetObj, fromIndex), -1, '[0, true, 3, targetObj, false].lastIndexOf(targetObj, fromIndex)');

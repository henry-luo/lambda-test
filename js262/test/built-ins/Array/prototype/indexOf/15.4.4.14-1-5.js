

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf applied to number primitive
---*/

var targetObj = {};

Number.prototype[1] = targetObj;
Number.prototype.length = 2;

assert.sameValue(Array.prototype.indexOf.call(5, targetObj), 1, 'Array.prototype.indexOf.call(5, targetObj)');

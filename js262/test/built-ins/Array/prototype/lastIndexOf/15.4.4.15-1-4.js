

/*---
esid: sec-array.prototype.lastindexof
description: Array.prototype.lastIndexOf applied to Boolean object
---*/

var obj = new Boolean(false);
obj.length = 2;
obj[1] = true;

assert.sameValue(Array.prototype.lastIndexOf.call(obj, true), 1, 'Array.prototype.lastIndexOf.call(obj, true)');

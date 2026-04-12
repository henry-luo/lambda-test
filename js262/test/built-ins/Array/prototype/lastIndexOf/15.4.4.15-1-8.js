

/*---
esid: sec-array.prototype.lastindexof
description: Array.prototype.lastIndexOf applied to String object
---*/

var obj = new String("undefined");

assert.sameValue(Array.prototype.lastIndexOf.call(obj, "f"), 4, 'Array.prototype.lastIndexOf.call(obj, "f")');

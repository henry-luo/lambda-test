

/*---
esid: sec-array.prototype.lastindexof
description: Array.prototype.lastIndexOf applied to the Math object
---*/

Math.length = 2;
Math[1] = 100;

assert.sameValue(Array.prototype.lastIndexOf.call(Math, 100), 1, 'Array.prototype.lastIndexOf.call(Math, 100)');

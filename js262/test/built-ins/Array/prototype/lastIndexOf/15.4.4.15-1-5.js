

/*---
esid: sec-array.prototype.lastindexof
description: Array.prototype.lastIndexOf applied to number primitive
---*/

Number.prototype[1] = isNaN;
Number.prototype.length = 2;

assert.sameValue(Array.prototype.lastIndexOf.call(5, isNaN), 1, 'Array.prototype.lastIndexOf.call(5, isNaN)');

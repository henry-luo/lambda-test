

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf applied to the Math object
---*/

Math[1] = true;
Math.length = 2;

assert.sameValue(Array.prototype.indexOf.call(Math, true), 1, 'Array.prototype.indexOf.call(Math, true)');



/*---
esid: sec-array.prototype.every
description: Array.prototype.every must exist as a function
---*/

var f = Array.prototype.every;

assert.sameValue(typeof(f), "function", 'typeof(f)');

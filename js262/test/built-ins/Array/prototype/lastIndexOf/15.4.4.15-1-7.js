

/*---
esid: sec-array.prototype.lastindexof
description: Array.prototype.lastIndexOf applied to string primitive
---*/

assert.sameValue(Array.prototype.lastIndexOf.call("abc", "c"), 2, 'Array.prototype.lastIndexOf.call("abc", "c")');

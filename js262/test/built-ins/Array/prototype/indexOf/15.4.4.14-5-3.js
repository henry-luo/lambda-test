

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf when fromIndex is boolean
---*/

var a = [1, 2, 3];

assert.sameValue(a.indexOf(1, true), -1, 'true resolves to 1');
assert.sameValue(a.indexOf(1, false), 0, 'false resolves to 0');

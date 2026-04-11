

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf when fromIndex is string
---*/

var a = [1, 2, 1, 2, 1, 2];

assert.sameValue(a.indexOf(2, "2"), 3, '"2" resolves to 2');
assert.sameValue(a.indexOf(2, "one"), 1, '"one" resolves to 0');

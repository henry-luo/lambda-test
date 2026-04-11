

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf must return correct index (self
    reference)
---*/

var a = new Array(0, 1, 2, 3);
a[2] = a;

assert.sameValue(a.lastIndexOf(a), 2, 'a.lastIndexOf(a)');
assert.sameValue(a.lastIndexOf(3), 3, 'a.lastIndexOf(3)');



/*---
esid: sec-array.prototype.lastindexof
description: Array.prototype.lastIndexOf when fromIndex is undefined
---*/

var a = new Array(1, 2, 1);


assert.sameValue(a.lastIndexOf(2, undefined), -1, 'a.lastIndexOf(2,undefined)');
assert.sameValue(a.lastIndexOf(1, undefined), 0, 'a.lastIndexOf(1,undefined)');
assert.sameValue(a.lastIndexOf(1), 2, 'a.lastIndexOf(1)');

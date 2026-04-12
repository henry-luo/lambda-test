

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf returns 0 if fromIndex is 'undefined'
---*/

var a = [1, 2, 3];


assert.sameValue(a.indexOf(1, undefined), 0, 'a.indexOf(1,undefined)');

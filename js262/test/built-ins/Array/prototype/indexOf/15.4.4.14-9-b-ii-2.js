

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - both type of array element and type of
    search element are Undefined
---*/

assert.sameValue([undefined].indexOf(), 0, '[undefined].indexOf()');
assert.sameValue([undefined].indexOf(undefined), 0, '[undefined].indexOf(undefined)');

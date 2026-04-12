

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - element to be retrieved is inherited
    data property on an Array
---*/

Array.prototype[0] = true;
Array.prototype[1] = false;
Array.prototype[2] = "true";

assert.sameValue([, , , ].lastIndexOf(true), 0, '[, , , ].lastIndexOf(true)');
assert.sameValue([, , , ].lastIndexOf(false), 1, '[, , , ].lastIndexOf(false)');
assert.sameValue([, , , ].lastIndexOf("true"), 2, '[, , , ].lastIndexOf("true")');

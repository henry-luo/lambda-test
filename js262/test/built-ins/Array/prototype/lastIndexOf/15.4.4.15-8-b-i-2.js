

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - element to be retrieved is own data
    property on an Array
---*/

assert.sameValue([true, true, true].lastIndexOf(true), 2, '[true, true, true].lastIndexOf(true)');
assert.sameValue([true, true, false].lastIndexOf(true), 1, '[true, true, false].lastIndexOf(true)');
assert.sameValue([true, false, false].lastIndexOf(true), 0, '[true, false, false].lastIndexOf(true)');

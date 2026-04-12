

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - element to be retrieved is own data
    property that overrides an inherited data property on an Array
---*/

Array.prototype[0] = false;

assert.sameValue([true].indexOf(true), 0, '[true].indexOf(true)');

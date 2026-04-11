

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - element to be retrieved is own data
    property that overrides an inherited data property on an Array
---*/

Array.prototype[0] = Object;

assert.sameValue([Object.prototype].lastIndexOf(Object.prototype), 0, '[Object.prototype].lastIndexOf(Object.prototype)');

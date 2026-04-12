

/*---
esid: sec-array.isarray
es5id: 15.4.3.2-0-5
description: >
    Array.isArray return true if its argument is an Array
    (Array.prototype)
---*/

assert.sameValue(Array.isArray(Array.prototype), true, 'Array.isArray(Array.prototype) must return true');

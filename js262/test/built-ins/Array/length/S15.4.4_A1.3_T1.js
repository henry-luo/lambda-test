

/*---
esid: sec-properties-of-the-array-prototype-object
info: Array prototype object has a length property
es5id: 15.4.4_A1.3_T1
description: Array.prototype.length === 0
---*/

assert.sameValue(Array.prototype.length, 0, 'The value of Array.prototype.length is expected to be 0');



/*---
esid: sec-array.isarray
es5id: 15.4.3.2-1-1
description: Array.isArray applied to boolean primitive
---*/

assert.sameValue(Array.isArray(true), false, 'Array.isArray(true) must return false');

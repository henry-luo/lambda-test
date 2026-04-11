

/*---
esid: sec-array.isarray
es5id: 15.4.3.2-1-8
description: Array.isArray applied to the Math object
---*/

assert.sameValue(Array.isArray(Math), false, 'Array.isArray(Math) must return false');

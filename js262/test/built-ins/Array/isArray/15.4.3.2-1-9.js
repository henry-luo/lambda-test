

/*---
esid: sec-array.isarray
es5id: 15.4.3.2-1-9
description: Array.isArray applied to Date object
---*/

assert.sameValue(Array.isArray(new Date(0)), false, 'Array.isArray(new Date(0)) must return false');

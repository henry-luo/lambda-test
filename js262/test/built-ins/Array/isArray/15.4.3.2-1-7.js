

/*---
esid: sec-array.isarray
es5id: 15.4.3.2-1-7
description: Array.isArray applied to Function object
---*/

assert.sameValue(Array.isArray(function() {}), false, 'Array.isArray(function() {}) must return false');

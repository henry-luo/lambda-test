

/*---
esid: sec-array.isarray
es5id: 15.4.3.2-1-5
description: Array.isArray applied to string primitive
---*/

assert.sameValue(Array.isArray("abc"), false, 'Array.isArray("abc") must return false');

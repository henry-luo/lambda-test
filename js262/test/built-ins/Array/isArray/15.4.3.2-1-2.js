

/*---
esid: sec-array.isarray
es5id: 15.4.3.2-1-2
description: Array.isArray applied to Boolean Object
---*/

assert.sameValue(Array.isArray(new Boolean(false)), false, 'Array.isArray(new Boolean(false)) must return false');

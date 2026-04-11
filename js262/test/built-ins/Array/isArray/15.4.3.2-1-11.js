

/*---
esid: sec-array.isarray
es5id: 15.4.3.2-1-11
description: Array.isArray applied to the JSON object
---*/

assert.sameValue(Array.isArray(JSON), false, 'Array.isArray(JSON) must return false');

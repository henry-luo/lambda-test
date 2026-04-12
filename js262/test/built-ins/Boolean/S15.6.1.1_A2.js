

/*---
info: Boolean() returns false
esid: sec-terms-and-definitions-boolean-value
description: Call Boolean() and check result
---*/
assert.sameValue(typeof Boolean(), "boolean", 'The value of `typeof Boolean()` is expected to be "boolean"');
assert.sameValue(Boolean(), false, 'Boolean() must return false');

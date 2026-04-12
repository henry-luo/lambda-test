

/*---
info: Boolean constructor has length property whose value is 1
esid: sec-boolean.prototype
description: Checking Boolean.length property
---*/
assert(Boolean.hasOwnProperty("length"), 'Boolean.hasOwnProperty("length") must return true');
assert.sameValue(Boolean.length, 1, 'The value of Boolean.length is expected to be 1');

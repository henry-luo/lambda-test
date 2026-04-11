

/*---
esid: sec-array.prototype.join
description: Array.prototype.join applied to boolean primitive
---*/

assert.sameValue(Array.prototype.join.call(true), "", 'Array.prototype.join.call(true) must return ""');
assert.sameValue(Array.prototype.join.call(false), "", 'Array.prototype.join.call(false) must return ""');

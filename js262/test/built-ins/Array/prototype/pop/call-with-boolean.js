

/*---
esid: sec-array.prototype.pop
description: Array.prototype.pop applied to boolean primitive
---*/

assert.sameValue(Array.prototype.pop.call(true), undefined, 'Array.prototype.pop.call(true) must return undefined');
assert.sameValue(Array.prototype.pop.call(false), undefined, 'Array.prototype.pop.call(false) must return undefined');

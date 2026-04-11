

/*---
info: The isFinite property has not prototype property
esid: sec-isfinite-number
description: Checking isFinite.prototype
---*/
assert.sameValue(isFinite.prototype, undefined, 'The value of isFinite.prototype is expected to equal undefined');

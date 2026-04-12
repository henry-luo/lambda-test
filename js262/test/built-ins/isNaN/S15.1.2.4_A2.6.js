

/*---
info: The isNaN property has not prototype property
esid: sec-isnan-number
description: Checking isNaN.prototype
---*/
assert.sameValue(isNaN.prototype, undefined, 'The value of isNaN.prototype is expected to equal undefined');

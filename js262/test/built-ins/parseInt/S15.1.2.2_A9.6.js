

/*---
info: The parseInt property has not prototype property
esid: sec-parseint-string-radix
description: Checking parseInt.prototype
---*/

assert.sameValue(Object.prototype.hasOwnProperty.call(parseInt, "prototype"), false, 'Object.prototype.hasOwnProperty.call(parseInt, "prototype") must return false');

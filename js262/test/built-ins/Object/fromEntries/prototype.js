

/*---
description: Created objects inherit from Object.prototype.
esid: sec-object.fromentries
features: [Object.fromEntries]
---*/

var result = Object.fromEntries([]);
assert.sameValue(Object.getPrototypeOf(result), Object.prototype);

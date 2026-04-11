

/*---
esid: sec-iteratorprototype.toArray
description: >
  Iterator.prototype.toArray is a built-in function
features: [iterator-helpers]
---*/

assert.sameValue(typeof Iterator.prototype.toArray, 'function');

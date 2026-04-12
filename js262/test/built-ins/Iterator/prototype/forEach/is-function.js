

/*---
esid: sec-iteratorprototype.forEach
description: >
  Iterator.prototype.forEach is a built-in function
features: [iterator-helpers]
---*/

assert.sameValue(typeof Iterator.prototype.forEach, 'function');

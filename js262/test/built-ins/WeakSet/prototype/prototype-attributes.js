

/*---
esid: sec-weakset.prototype
description: >
  WeakSet.prototype is not writable, not enumerable and not configurable.
includes: [propertyHelper.js]
---*/

verifyProperty(WeakSet, 'prototype', {
  writable: false,
  enumerable: false,
  configurable: false,
});

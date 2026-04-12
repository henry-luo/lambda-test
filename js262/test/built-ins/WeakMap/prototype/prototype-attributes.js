

/*---
esid: sec-weakmap.prototype
description: >
  WeakMap.prototype is not writable, not enumerable and not configurable.
includes: [propertyHelper.js]
---*/

verifyProperty(WeakMap, 'prototype', {
  writable: false,
  enumerable: false,
  configurable: false,
});

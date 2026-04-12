

/*---
esid: sec-map.prototype
description: Map.prototype property attributes.
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyProperty(Map, 'prototype', {
  writable: false,
  enumerable: false,
  configurable: false,
});

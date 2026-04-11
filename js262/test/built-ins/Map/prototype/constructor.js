

/*---
esid: sec-map-constructor
description: Map.prototype.constructor value and descriptor
info: |
  The initial value of Map.prototype.constructor is the intrinsic object %Map%.
includes: [propertyHelper.js]
---*/

assert.sameValue(Map.prototype.constructor, Map);
assert.sameValue((new Map()).constructor, Map);

verifyProperty(Map.prototype, 'constructor', {
  writable: true,
  enumerable: false,
  configurable: true,
});

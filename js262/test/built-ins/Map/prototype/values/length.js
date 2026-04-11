

/*---
esid: sec-map.prototype.values
description: >
  Map.prototype.values.length value and descriptor.
info: |
  Map.prototype.values ()

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Map.prototype.values, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});



/*---
esid: sec-map.prototype.get
description: >
  Map.prototype.get.length value and descriptor.
info: |
  Map.prototype.get ( key )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Map.prototype.get, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});

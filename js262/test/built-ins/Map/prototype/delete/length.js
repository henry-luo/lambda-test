

/*---
esid: sec-map.prototype.delete
description: >
  Map.prototype.delete.length value and descriptor.
info: |
  Map.prototype.delete ( key )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Map.prototype.delete, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});

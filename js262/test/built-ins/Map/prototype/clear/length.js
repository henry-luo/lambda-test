

/*---
esid: sec-map.prototype.clear
description: >
  Map.prototype.clear.length value and descriptor.
info: |
  Map.prototype.clear ( )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Map.prototype.clear, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});

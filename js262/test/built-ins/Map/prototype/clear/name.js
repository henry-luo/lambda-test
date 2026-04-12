

/*---
esid: sec-map.prototype.clear
description: >
  Map.prototype.entries.name value and descriptor.
info: |
  Map.prototype.clear ( )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Map.prototype.clear, "name", {
  value: "clear",
  writable: false,
  enumerable: false,
  configurable: true
});

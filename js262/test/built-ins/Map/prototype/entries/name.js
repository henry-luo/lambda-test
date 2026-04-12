

/*---
esid: sec-map.prototype.entries
description: >
  Map.prototype.entries.name value and descriptor.
info: |
  Map.prototype.entries ( )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Map.prototype.entries, "name", {
  value: "entries",
  writable: false,
  enumerable: false,
  configurable: true
});

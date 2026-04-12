

/*---
esid: sec-map.prototype.keys
description: >
  Map.prototype.keys.name value and descriptor.
info: |
  Map.prototype.keys ()

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Map.prototype.keys, "name", {
  value: "keys",
  writable: false,
  enumerable: false,
  configurable: true
});

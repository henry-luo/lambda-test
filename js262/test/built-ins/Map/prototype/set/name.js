

/*---
esid: sec-map.prototype.set
description: >
  Map.prototype.set.name value and descriptor.
info: |
  Map.prototype.set ( key , value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Map.prototype.set, "name", {
  value: "set",
  writable: false,
  enumerable: false,
  configurable: true
});

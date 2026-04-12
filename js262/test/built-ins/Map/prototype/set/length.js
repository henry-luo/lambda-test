

/*---
esid: sec-map.prototype.set
description: >
  Map.prototype.set.length value and descriptor.
info: |
  Map.prototype.set ( key , value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Map.prototype.set, "length", {
  value: 2,
  writable: false,
  enumerable: false,
  configurable: true
});

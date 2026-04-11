

/*---
esid: sec-map.prototype.foreach
description: >
  Map.prototype.forEach.length value and descriptor.
info: |
  Map.prototype.forEach ( callbackfn [ , thisArg ] )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Map.prototype.forEach, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});

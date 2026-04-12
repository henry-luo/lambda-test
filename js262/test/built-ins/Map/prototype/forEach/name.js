

/*---
esid: sec-map.prototype.foreach
description: >
  Map.prototype.forEach.name value and descriptor.
info: |
  Map.prototype.forEach ( callbackfn [ , thisArg ] )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Map.prototype.forEach, "name", {
  value: "forEach",
  writable: false,
  enumerable: false,
  configurable: true
});

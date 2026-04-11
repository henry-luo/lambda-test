

/*---
esid: sec-get-map.prototype.size
description: >
  Map.prototype.size.name value and descriptor.
info: |
  get Map.prototype.size

  17 ECMAScript Standard Built-in Objects

  Functions that are specified as get or set accessor functions of built-in
  properties have "get " or "set " prepended to the property name string.

includes: [propertyHelper.js]
---*/

var descriptor = Object.getOwnPropertyDescriptor(Map.prototype, 'size');

verifyProperty(descriptor.get, "name", {
  value: "get size",
  writable: false,
  enumerable: false,
  configurable: true
});

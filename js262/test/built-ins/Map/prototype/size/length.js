

/*---
esid: sec-get-map.prototype.size
description: >
  Map.prototype.size.length value and descriptor.
info: |
  get Map.prototype.size

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

var descriptor = Object.getOwnPropertyDescriptor(Map.prototype, 'size');

verifyProperty(descriptor.get, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});

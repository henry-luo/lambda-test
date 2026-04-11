

/*---
esid: sec-get-dataview.prototype.byteoffset
description: >
  get DataView.prototype.byteOffset

  17 ECMAScript Standard Built-in Objects

  Functions that are specified as get or set accessor functions of built-in
  properties have "get " or "set " prepended to the property name string.

includes: [propertyHelper.js]
---*/

var descriptor = Object.getOwnPropertyDescriptor(
  DataView.prototype, 'byteOffset'
);

verifyProperty(descriptor.get, "name", {
  value: "get byteOffset",
  writable: false,
  enumerable: false,
  configurable: true
});

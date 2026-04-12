

/*---
esid: sec-get-regexp.prototype.hasindices
description: >
  RegExp.prototype.hasIndices name
info: |
  17 ECMAScript Standard Built-in Objects

  Functions that are specified as get or set accessor functions of built-in
  properties have "get " or "set " prepended to the property name string.
includes: [propertyHelper.js]
features: [regexp-match-indices]
---*/

var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, "hasIndices");

assert.sameValue(
  desc.get.name,
  "get hasIndices"
);

verifyProperty(desc.get, "name", {
  enumerable: false,
  writable: false,
  configurable: true,
});

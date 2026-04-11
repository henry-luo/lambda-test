

/*---
esid: sec-regexp.escape
description: >
  RegExp.escape.length property descriptor
info: |
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [RegExp.escape]
---*/

verifyProperty(RegExp.escape, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});

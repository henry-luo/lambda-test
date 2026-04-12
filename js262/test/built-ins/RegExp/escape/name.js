

/*---
esid: sec-regexp.escape
description: >
  RegExp.escape.name property descriptor
info: |
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [RegExp.escape]
---*/

verifyProperty(RegExp.escape, "name", {
  value: 'escape',
  writable: false,
  enumerable: false,
  configurable: true
});

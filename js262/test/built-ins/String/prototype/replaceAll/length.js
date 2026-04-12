

/*---
esid: sec-string.prototype.replaceall
description: >
  String.prototype.replaceAll.length value and descriptor.
info: |
  String.prototype.replaceAll ( searchValue, replaceValue )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [String.prototype.replaceAll]
---*/

verifyProperty(String.prototype.replaceAll, 'length', {
  value: 2,
  enumerable: false,
  writable: false,
  configurable: true,
});

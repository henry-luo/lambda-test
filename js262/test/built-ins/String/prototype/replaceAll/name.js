

/*---
esid: sec-string.prototype.replaceall
description: >
  String.prototype.replaceAll.name value and descriptor.
info: |
  String.prototype.replaceAll ( searchValue, replaceValue )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [String.prototype.replaceAll]
---*/

verifyProperty(String.prototype.replaceAll, 'name', {
  value: 'replaceAll',
  enumerable: false,
  writable: false,
  configurable: true,
});

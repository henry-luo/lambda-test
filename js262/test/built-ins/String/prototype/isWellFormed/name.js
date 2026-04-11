

/*---
esid: sec-string.prototype.iswellformed
description: >
  String.prototype.isWellFormed.name value and descriptor.
info: |
  String.prototype.isWellFormed( )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [String.prototype.isWellFormed]
---*/

verifyProperty(String.prototype.isWellFormed, 'name', {
  enumerable: false,
  writable: false,
  configurable: true,
  value: 'isWellFormed'
});

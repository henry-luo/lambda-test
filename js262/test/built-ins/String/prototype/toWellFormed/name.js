

/*---
esid: sec-string.prototype.towellformed
description: >
  String.prototype.toWellFormed.name value and descriptor.
info: |
  String.prototype.toWellFormed( )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [String.prototype.toWellFormed]
---*/

verifyProperty(String.prototype.toWellFormed, 'name', {
  enumerable: false,
  writable: false,
  configurable: true,
  value: 'toWellFormed'
});

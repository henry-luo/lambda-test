

/*---
esid: sec-string.prototype.towellformed
description: >
  Property type and descriptor.
info: |
  String.prototype.toWellFormed( )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [String.prototype.toWellFormed]
---*/

assert.sameValue(
  typeof String.prototype.toWellFormed,
  'function',
  'The value of `typeof String.prototype.toWellFormed` is "function"'
);

verifyProperty(String.prototype, 'toWellFormed', {
  enumerable: false,
  writable: true,
  configurable: true
});

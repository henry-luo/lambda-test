

/*---
esid: sec-string.prototype.replaceall
description: >
  Property type and descriptor.
info: |
  String.prototype.replaceAll ( searchValue, replaceValue )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [String.prototype.replaceAll]
---*/

assert.sameValue(
  typeof String.prototype.replaceAll,
  'function',
  '`typeof String.prototype.replaceAll` is `function`'
);

verifyProperty(String.prototype, 'replaceAll', {
  enumerable: false,
  writable: true,
  configurable: true,
});

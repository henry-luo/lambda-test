

/*---
es6id: 21.1.3.7
description: >
  Property type and descriptor.
info: |
  21.1.3.7 String.prototype.includes ( searchString [ , position ] )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [String.prototype.includes]
---*/

assert.sameValue(
  typeof String.prototype.includes,
  'function',
  '`typeof String.prototype.includes` is `function`'
);

verifyProperty(String.prototype, 'includes', {
  writable: true,
  enumerable: false,
  configurable: true,
});

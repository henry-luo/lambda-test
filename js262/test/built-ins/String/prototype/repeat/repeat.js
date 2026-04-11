

/*---
es6id: 21.1.3.13
description: >
  Property type and descriptor.
info: |
  21.1.3.13 String.prototype.repeat ( count )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof String.prototype.repeat,
  'function',
  '`typeof String.prototype.repeat` is `function`'
);

verifyProperty(String.prototype, 'repeat', {
  writable: true,
  enumerable: false,
  configurable: true,
});

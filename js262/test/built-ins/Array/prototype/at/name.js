

/*---
esid: sec-array.prototype.at
description: >
  Array.prototype.at.name value and descriptor.
info: |
  Array.prototype.at( index )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [Array.prototype.at]
---*/
assert.sameValue(
  typeof Array.prototype.at,
  'function',
  'The value of `typeof Array.prototype.at` is expected to be "function"'
);

assert.sameValue(
  Array.prototype.at.name, 'at',
  'The value of Array.prototype.at.name is expected to be "at"'
);

verifyProperty(Array.prototype.at, 'name', {
  enumerable: false,
  writable: false,
  configurable: true
});

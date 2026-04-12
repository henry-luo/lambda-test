

/*---
esid: sec-array.prototype.at
description: >
  Array.prototype.at.length value and descriptor.
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

verifyProperty(Array.prototype.at, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});

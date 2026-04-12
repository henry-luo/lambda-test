

/*---
esid: sec-array.prototype.flat
description: Property type and descriptor.
info: >
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [Array.prototype.flat]
---*/

assert.sameValue(
  typeof Array.prototype.flat,
  'function',
  '`typeof Array.prototype.flat` is `function`'
);

verifyProperty(Array.prototype, 'flat', {
  enumerable: false,
  writable: true,
  configurable: true,
});

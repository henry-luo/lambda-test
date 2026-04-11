

/*---
esid: sec-array.prototype.fill
description: Property type and descriptor.
info: |
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Array.prototype.fill,
  'function',
  '`typeof Array.prototype.fill` is `function`'
);

verifyProperty(Array.prototype, "fill", {
  writable: true,
  enumerable: false,
  configurable: true
});

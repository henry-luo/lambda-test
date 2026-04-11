

/*---
esid: sec-array.prototype.find
description: Property type and descriptor.
info: |
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Array.prototype.find,
  'function',
  '`typeof Array.prototype.find` is `function`'
);

verifyProperty(Array.prototype, "find", {
  writable: true,
  enumerable: false,
  configurable: true
});

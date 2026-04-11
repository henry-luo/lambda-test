

/*---
esid: sec-array.prototype.copywithin
description: Property type and descriptor.
info: |
  22.1.3.3 Array.prototype.copyWithin (target, start [ , end ] )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Array.prototype.copyWithin,
  'function',
  '`typeof Array.prototype.copyWithin` is `function`'
);

verifyProperty(Array.prototype, "copyWithin", {
  writable: true,
  enumerable: false,
  configurable: true
});

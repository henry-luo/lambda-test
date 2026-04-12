

/*---
esid: sec-array.prototype.entries
description: >
  Property type and descriptor.
info: |
  22.1.3.4 Array.prototype.entries ( )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Array.prototype.entries,
  'function',
  '`typeof Array.prototype.entries` is `function`'
);

verifyProperty(Array.prototype, "entries", {
  writable: true,
  enumerable: false,
  configurable: true
});

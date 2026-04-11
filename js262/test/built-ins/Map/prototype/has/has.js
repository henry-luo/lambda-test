

/*---
esid: sec-map.prototype.has
description: >
  Property type and descriptor.
info: |
  Map.prototype.has ( key )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Map.prototype.has,
  'function',
  '`typeof Map.prototype.has` is `function`'
);

verifyProperty(Map.prototype, 'has', {
  writable: true,
  enumerable: false,
  configurable: true,
});

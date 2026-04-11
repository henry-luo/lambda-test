

/*---
esid: sec-map.prototype.get
description: >
  Property type and descriptor.
info: |
  Map.prototype.get ( key )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Map.prototype.get,
  'function',
  '`typeof Map.prototype.get` is `function`'
);

verifyProperty(Map.prototype, 'get', {
  writable: true,
  enumerable: false,
  configurable: true,
});

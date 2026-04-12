

/*---
esid: sec-map.prototype.entries
description: >
  Property type and descriptor.
info: |
  Map.prototype.entries ( )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Map.prototype.entries,
  'function',
  '`typeof Map.prototype.entries` is `function`'
);

verifyProperty(Map.prototype, 'entries', {
  writable: true,
  enumerable: false,
  configurable: true,
});



/*---
esid: sec-map.prototype.forEach
description: >
  Property type and descriptor.
info: |
  Map.prototype.forEach ( callbackfn [ , thisArg ] )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Map.prototype.forEach,
  'function',
  '`typeof Map.prototype.forEach` is `function`'
);

verifyProperty(Map.prototype, 'forEach', {
  writable: true,
  enumerable: false,
  configurable: true,
});

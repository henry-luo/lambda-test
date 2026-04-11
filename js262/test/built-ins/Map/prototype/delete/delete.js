

/*---
esid: sec-map.prototype.delete
description: >
    Map.prototype.delete ( )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Map.prototype.delete,
  'function',
  'typeof Map.prototype.delete is "function"'
);

verifyProperty(Map.prototype, 'delete', {
  writable: true,
  enumerable: false,
  configurable: true,
});

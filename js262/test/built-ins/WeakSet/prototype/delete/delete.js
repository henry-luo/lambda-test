

/*---
esid: sec-weakset.prototype.delete
description: >
  WeakSet.prototype.delete property descriptor
info: |
  WeakSet.prototype.delete ( value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof WeakSet.prototype.delete,
  'function',
  'typeof WeakSet.prototype.delete is "function"'
);

verifyProperty(WeakSet.prototype, 'delete', {
  writable: true,
  enumerable: false,
  configurable: true,
});



/*---
esid: sec-weakmap.prototype.has
description: >
  WeakMap.prototype.has property descriptor
info: |
  WeakMap.prototype.has ( value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof WeakMap.prototype.has,
  'function',
  'typeof WeakMap.prototype.has is "function"'
);

verifyProperty(WeakMap.prototype, 'has', {
  writable: true,
  enumerable: false,
  configurable: true,
});



/*---
esid: sec-weakmap.prototype.constructor
description: >
  WeakMap.prototype.constructor value and property descriptor
info: |
  The initial value of WeakMap.prototype.constructor is the %WeakMap%
  intrinsic object.

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(WeakMap.prototype.constructor, WeakMap);
assert.sameValue((new WeakMap()).constructor, WeakMap);

verifyProperty(WeakMap.prototype, 'constructor', {
  writable: true,
  enumerable: false,
  configurable: true,
});



/*---
esid: sec-disposablestack.prototype-@@dispose
description: Initial state of the Symbol.dispose property
info: |
  The initial value of the @@dispose property is the same function object as
  the initial value of the dispose property.

  Per ES6 section 17, the method should exist on the Array prototype, and it
  should be writable and configurable, but not enumerable.
includes: [propertyHelper.js]
features: [explicit-resource-management]
---*/

assert.sameValue(DisposableStack.prototype[Symbol.dispose], DisposableStack.prototype.dispose);
verifyProperty(DisposableStack.prototype, Symbol.dispose, {
  enumerable: false,
  writable: true,
  configurable: true
});

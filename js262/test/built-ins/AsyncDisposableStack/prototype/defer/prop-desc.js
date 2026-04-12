

/*---
esid: sec-asyncdisposablestack.prototype.defer
description: >
  Property descriptor of AsyncDisposableStack.prototype.defer
info: |
  17 ECMAScript Standard Built-in Objects:

  Every other data property described in clauses 18 through 26 and in Annex B.2
  has the attributes { [[Writable]]: true, [[Enumerable]]: false,
  [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
features: [explicit-resource-management]
---*/

assert.sameValue(typeof AsyncDisposableStack.prototype.defer, 'function');

verifyProperty(AsyncDisposableStack.prototype, 'defer', {
  enumerable: false,
  writable: true,
  configurable: true
});

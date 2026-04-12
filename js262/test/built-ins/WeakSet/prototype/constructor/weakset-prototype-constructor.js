

/*---
esid: sec-weakset.prototype.constructor
description: >
  WeakSet.prototype.constructor property descriptor
info: |
  WeakSet ( [ iterable ] )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(WeakSet.prototype, 'constructor', {
  writable: true,
  enumerable: false,
  configurable: true,
});



/*---
es6id: 19.2.3.6
description: Function.prototype[Symbol.hasInstance] property descriptor
info: |
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
features: [Symbol.hasInstance]
includes: [propertyHelper.js]
---*/

assert.sameValue(typeof Function.prototype[Symbol.hasInstance], 'function');

verifyProperty(Function.prototype, Symbol.hasInstance, {
  writable: false,
  enumerable: false,
  configurable: false,
});

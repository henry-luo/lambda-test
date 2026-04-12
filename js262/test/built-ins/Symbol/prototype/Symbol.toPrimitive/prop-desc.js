

/*---
es6id: 19.4.3.4
description: Symbol.prototype[Symbol.toPrimitive] property descriptor
info: |
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [Symbol.toPrimitive]
---*/

verifyProperty(Symbol.prototype, Symbol.toPrimitive, {
  writable: false,
  enumerable: false,
  configurable: true,
});

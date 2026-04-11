

/*---
esid: sec-date.prototype-@@toprimitive
description: Date.prototype[Symbol.toPrimitive] property descriptor
info: |
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [Symbol.toPrimitive]
---*/

verifyProperty(Date.prototype, Symbol.toPrimitive, {
  writable: false,
  enumerable: false,
  configurable: true,
});

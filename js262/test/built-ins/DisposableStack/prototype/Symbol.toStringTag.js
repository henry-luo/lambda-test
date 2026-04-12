

/*---
esid: sec-disposablestack.prototype-@@toStringTag
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    'DisposableStack'.

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [explicit-resource-management, Symbol, Symbol.toStringTag]
---*/

verifyProperty(DisposableStack.prototype, Symbol.toStringTag, {
  value: 'DisposableStack',
  writable: false,
  enumerable: false,
  configurable: true
});

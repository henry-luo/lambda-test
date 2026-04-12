

/*---
esid: sec-asyncdisposablestack.prototype-@@toStringTag
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    'AsyncDisposableStack'.

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [explicit-resource-management, Symbol, Symbol.toStringTag]
---*/

verifyProperty(AsyncDisposableStack.prototype, Symbol.toStringTag, {
  value: 'AsyncDisposableStack',
  writable: false,
  enumerable: false,
  configurable: true
});

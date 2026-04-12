

/*---
esid: sec-weak-ref-@@tostringtag
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    'WeakRef'.

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [WeakRef, Symbol, Symbol.toStringTag]
---*/

verifyProperty(WeakRef.prototype, Symbol.toStringTag, {
  value: 'WeakRef',
  writable: false,
  enumerable: false,
  configurable: true
});



/*---
esid: sec-set.prototype-@@tostringtag
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    "Set".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [Symbol.toStringTag]
---*/

assert.sameValue(Set.prototype[Symbol.toStringTag], 'Set');

verifyProperty(Set.prototype, Symbol.toStringTag, {
  writable: false,
  enumerable: false,
  configurable: true,
});

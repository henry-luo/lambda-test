

/*---
esid: sec-weakmap.prototype-@@tostringtag
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    "WeakMap".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [Symbol.toStringTag]
---*/

assert.sameValue(WeakMap.prototype[Symbol.toStringTag], 'WeakMap');

verifyProperty(WeakMap.prototype, Symbol.toStringTag, {
  writable: false,
  enumerable: false,
  configurable: true,
});

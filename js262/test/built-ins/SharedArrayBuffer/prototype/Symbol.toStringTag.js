

/*---
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    "SharedArrayBuffer".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [SharedArrayBuffer, Symbol.toStringTag]
---*/

assert.sameValue(SharedArrayBuffer.prototype[Symbol.toStringTag], 'SharedArrayBuffer');

verifyProperty(SharedArrayBuffer.prototype, Symbol.toStringTag, {
  writable: false,
  enumerable: false,
  configurable: true,
});

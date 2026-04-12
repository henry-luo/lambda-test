

/*---
es6id: 20.2.1.9
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    "Math".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [Symbol.toStringTag]
---*/

assert.sameValue(Math[Symbol.toStringTag], 'Math');

verifyProperty(Math, Symbol.toStringTag, {
  writable: false,
  enumerable: false,
  configurable: true,
});

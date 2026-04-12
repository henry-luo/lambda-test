

/*---
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    "Reflect".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [Symbol.toStringTag, Reflect]
---*/

verifyProperty(Reflect, Symbol.toStringTag, {
  value: 'Reflect',
  enumerable: false,
  writable: false,
  configurable: true,
});

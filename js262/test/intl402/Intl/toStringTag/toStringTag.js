

/*---
esid: sec-Intl-toStringTag
description: >
  Property descriptor of Intl[@@toStringTag].
info: |
  Intl [ @@toStringTag ]

  The initial value of the @@toStringTag property is the String value "Intl".

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
features: [Symbol.toStringTag]
includes: [propertyHelper.js]
---*/

verifyProperty(Intl, Symbol.toStringTag, {
  value: "Intl",
  writable: false,
  enumerable: false,
  configurable: true,
});

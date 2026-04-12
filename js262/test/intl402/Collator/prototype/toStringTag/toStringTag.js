

/*---
esid: sec-intl.collator.prototype-@@tostringtag
description: >
  Property descriptor of Intl.Collator.prototype[@@toStringTag].
info: |
  Intl.Collator.prototype [ @@toStringTag ]

  The initial value of the @@toStringTag property is the String value "Intl.Collator".

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
features: [Symbol.toStringTag]
includes: [propertyHelper.js]
---*/

verifyProperty(Intl.Collator.prototype, Symbol.toStringTag, {
  value: "Intl.Collator",
  writable: false,
  enumerable: false,
  configurable: true,
});

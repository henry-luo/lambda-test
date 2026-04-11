

/*---
esid: sec-intl.pluralrules.prototype-tostringtag
description: >
  Property descriptor of Intl.PluralRules.prototype[@@toStringTag].
info: |
  Intl.PluralRules.prototype [ @@toStringTag ]

  The initial value of the @@toStringTag property is the String value "Intl.PluralRules".

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
features: [Symbol.toStringTag]
includes: [propertyHelper.js]
---*/

verifyProperty(Intl.PluralRules.prototype, Symbol.toStringTag, {
  value: "Intl.PluralRules",
  writable: false,
  enumerable: false,
  configurable: true,
});



/*---
esid: sec-intl.datetimeformat.prototype-@@tostringtag
description: >
  Property descriptor of Intl.DateTimeFormat.prototype[@@toStringTag].
info: |
  Intl.DateTimeFormat.prototype [ @@toStringTag ]

  The initial value of the @@toStringTag property is the String value "Intl.DateTimeFormat".

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
features: [Symbol.toStringTag]
includes: [propertyHelper.js]
---*/

verifyProperty(Intl.DateTimeFormat.prototype, Symbol.toStringTag, {
  value: "Intl.DateTimeFormat",
  writable: false,
  enumerable: false,
  configurable: true,
});

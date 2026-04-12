

/*---
esid: sec-intl.numberformat.prototype-@@tostringtag
description: >
  Tests that Intl.NumberFormat.prototype[@@toStringTag] has the required attributes.
includes: [propertyHelper.js]
---*/

verifyProperty(Intl.NumberFormat.prototype, Symbol.toStringTag, {
  value: 'Intl.NumberFormat',
  writable: false,
  enumerable: false,
  configurable: true
});

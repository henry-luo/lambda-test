

/*---
esid: sec-Intl.PluralRules.prototype.selectRange
description: Intl.PluralRules.prototype.selectRange.length is 2
includes: [propertyHelper.js]
features: [Intl.NumberFormat-v3]
---*/

verifyProperty(Intl.PluralRules.prototype.selectRange, 'length', {
  value: 2,
  enumerable: false,
  writable: false,
  configurable: true,
});

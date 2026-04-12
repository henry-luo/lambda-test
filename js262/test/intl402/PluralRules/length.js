

/*---
esid: sec-Intl.PluralRules
description: Intl.PluralRules.length.
author: Zibi Braniecki
includes: [propertyHelper.js]
---*/

verifyProperty(Intl.PluralRules, 'length', {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});

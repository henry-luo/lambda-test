

/*---
esid: sec-Intl.PluralRules
description: Intl.PluralRules.name is "PluralRules"
author: Zibi Braniecki
includes: [propertyHelper.js]
---*/

verifyProperty(Intl.PluralRules, 'name', {
  value: 'PluralRules',
  writable: false,
  enumerable: false,
  configurable: true
});

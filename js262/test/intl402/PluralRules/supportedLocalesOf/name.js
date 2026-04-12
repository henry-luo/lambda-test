

/*---
esid: sec-Intl.PluralRules.supportedLocalesOf
description: Tests that Intl.PluralRules.supportedLocalesOf.name is "supportedLocalesOf"
author: Zibi Braniecki
includes: [propertyHelper.js]
---*/

verifyProperty(Intl.PluralRules.supportedLocalesOf, "name", {
  value: "supportedLocalesOf",
  writable: false,
  enumerable: false,
  configurable: true,
});



/*---
esid: sec-Intl.PluralRules.prototype.select
description: Intl.PluralRules.prototype.select.name is "select"
author: Zibi Braniecki
includes: [propertyHelper.js]
---*/

verifyProperty(Intl.PluralRules.prototype.select, "name", {
  value: "select",
  writable: false,
  enumerable: false,
  configurable: true,
});

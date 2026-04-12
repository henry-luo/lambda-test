

/*---
esid: sec-properties-of-intl-pluralrules-prototype-object
description: Tests that Intl.PluralRules.prototype has the required attributes.
author: Zibi Braniecki
includes: [propertyHelper.js]
---*/

verifyProperty(Intl.PluralRules, "prototype", {
    writable: false,
    enumerable: false,
    configurable: false,
});



/*---
esid: sec-Intl.PluralRules.supportedLocalesOf
description: >
    Tests that Intl.PluralRules.supportedLocalesOf doesn't access
    arguments that it's not given.
author: Zibi Braniecki
includes: [testIntl.js]
---*/

taintDataProperty(Object.prototype, "1");
new Intl.PluralRules("und");

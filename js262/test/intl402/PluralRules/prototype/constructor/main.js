

/*---
esid: sec-Intl.PluralRules.prototype.constructor
description: >
    Tests that Intl.PluralRules.prototype is an object that has been
    initialized as an Intl.PluralRules.
author: Zibi Braniecki
---*/

assert.sameValue(Intl.PluralRules.prototype.constructor, Intl.PluralRules, "Intl.PluralRules.prototype.constructor is not the same as Intl.PluralRules");

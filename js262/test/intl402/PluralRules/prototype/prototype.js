

/*---
esid: sec-properties-of-intl-pluralrules-prototype-object
description: >
    Tests that Intl.PluralRules.prototype is not an object that has been
    initialized as an Intl.PluralRules.
author: Zibi Braniecki
---*/


assert.throws(TypeError, function() {
    Intl.PluralRules.prototype.select(0);
}, "Intl.PluralRules.prototype is not an object that has been initialized as an Intl.PluralRules");

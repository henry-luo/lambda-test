

/*---
es5id: 11.1.1_6
description: >
    Tests that the behavior of a Record is not affected by
    adversarial  changes to Object.prototype.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

taintProperties(["localeMatcher"]);

var locale = new Intl.NumberFormat(undefined, {localeMatcher: "lookup"}).resolvedOptions().locale;
assert(isCanonicalizedStructurallyValidLanguageTag(locale), "NumberFormat returns invalid locale " + locale + ".");

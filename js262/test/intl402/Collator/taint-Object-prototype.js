

/*---
es5id: 10.1.1_10
description: >
    Tests that the behavior of a Record is not affected by
    adversarial  changes to Object.prototype.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

taintProperties(["localeMatcher", "kn", "kf"]);

var locale = new Intl.Collator(undefined, {localeMatcher: "lookup"}).resolvedOptions().locale;
assert(isCanonicalizedStructurallyValidLanguageTag(locale), "Collator returns invalid locale " + locale + ".");

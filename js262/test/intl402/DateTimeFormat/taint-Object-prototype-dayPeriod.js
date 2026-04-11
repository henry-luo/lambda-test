

/*---
esid: sec-createdatetimeformat
description: >
    Tests that the behavior of a Record is not affected by
    adversarial changes to Object.prototype.
includes: [testIntl.js]
features: [Intl.DateTimeFormat-dayPeriod]
---*/

taintProperties(["dayPeriod"]);

var locale = new Intl.DateTimeFormat(undefined, {localeMatcher: "lookup"}).resolvedOptions().locale;
assert(isCanonicalizedStructurallyValidLanguageTag(locale), "DateTimeFormat returns invalid locale " + locale + ".");

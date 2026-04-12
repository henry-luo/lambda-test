

/*---
es5id: 6.2.4
description: >
    Tests that the default locale is a String value representing the
    structurally valid and canonicalized BCP 47 language tag.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

testWithIntlConstructors(function (Constructor) {
    var defaultLocale = new Constructor().resolvedOptions().locale;
    assert(isCanonicalizedStructurallyValidLanguageTag(defaultLocale), "Default locale \"" + defaultLocale + "\" is not canonicalized and structurally valid language tag.");
});

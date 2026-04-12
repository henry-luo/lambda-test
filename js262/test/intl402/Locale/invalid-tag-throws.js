

/*---
esid: sec-intl.locale
description: >
    Checks error cases for the options argument to the Locale
    constructor.
info: |
    Intl.Locale( tag [, options] )

    ...
    11. Else
        a. Let options be ? ToObject(options).
    12. Set tag to ? ApplyOptionsToTag(tag, options).
    ...

    ApplyOptionsToTag( tag, options )

    ...
    2. If IsStructurallyValidLanguageTag(tag) is false, throw a RangeError exception.
    ...
includes: [testIntl.js]
features: [Intl.Locale]
---*/

assert.sameValue(typeof Intl.Locale, "function");


assert.throws(TypeError, function() { new Intl.Locale("en", null) })


for (const invalidTag of getInvalidLanguageTags()) {
  assert.throws(RangeError, function() {
    new Intl.Locale(invalidTag);
  }, `${invalidTag} is an invalid tag value`);
}


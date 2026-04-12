

/*---
esid: sec-apply-options-to-tag
description: >
    ApplyOptionsToTag canonicalises the language tag two times.
info: |
    10.1.1 ApplyOptionsToTag( tag, options )

    ...
    9. Set tag to CanonicalizeUnicodeLocaleId(tag).
    10. If language is not undefined,
        ...
        b. Set tag to tag with the substring corresponding to the unicode_language_subtag
           production of the unicode_language_id replaced by the string language.
    ...
    13. Return CanonicalizeUnicodeLocaleId(tag).
features: [Intl.Locale]
---*/


assert.sameValue(new Intl.Locale("und-Armn-SU", {language: "ru"}).toString(), "ru-Armn-AM");

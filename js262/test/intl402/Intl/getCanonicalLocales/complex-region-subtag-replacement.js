

/*---
esid: sec-intl.getcanonicallocales
description: >
  Assert non-simple region subtag replacements work as expected.
info: |
  8.2.1 Intl.getCanonicalLocales (locales)
    1. Let ll be ? CanonicalizeLocaleList(locales).
    2. Return CreateArrayFromList(ll).

  9.2.1 CanonicalizeLocaleList (locales)
    ...
    7. Repeat, while k < len
      ...
      c. If kPresent is true, then
        ...
        vi. Let canonicalizedTag be CanonicalizeUnicodeLocaleId(tag).
        ...

  UTS 35, §3.2.1 Canonical Unicode Locale Identifiers

  - Replace aliases in the unicode_language_id and tlang (if any) using the following process:
    - If the region subtag matches the type attribute of a territoryAlias element in
      Supplemental Data, replace the language subtag with the replacement value, as follows:
      1. If there is a single territory in the replacement, use it.
      2. If there are multiple territories:
        1. Look up the most likely territory for the base language code (and script, if there is one).
        2. If that likely territory is in the list, use it.
        3. Otherwise, use the first territory in the list.

includes: [testIntl.js]
---*/


const testData = {
  
  
  "ru-SU": "ru-RU",
  "ru-810": "ru-RU",
  "en-SU": "en-RU",
  "en-810": "en-RU",
  "und-SU": "und-RU",
  "und-810": "und-RU",
  "und-Latn-SU": "und-Latn-RU",
  "und-Latn-810": "und-Latn-RU",

  
  "hy-SU": "hy-AM",
  "hy-810": "hy-AM",
  "und-Armn-SU": "und-Armn-AM",
  "und-Armn-810": "und-Armn-AM",

  
  "sr-CS": "sr-RS",
  "sr-Latn-CS": "sr-Latn-RS",
  "sr-Cyrl-CS": "sr-Cyrl-RS",

  
  "az-NT": "az-SA",
};

for (let [tag, canonical] of Object.entries(testData)) {
  
  assert(
    isCanonicalizedStructurallyValidLanguageTag(canonical),
    "\"" + canonical + "\" is a canonicalized and structurally valid language tag."
  );

  let result = Intl.getCanonicalLocales(tag);
  assert.sameValue(result.length, 1);
  assert.sameValue(result[0], canonical);
}

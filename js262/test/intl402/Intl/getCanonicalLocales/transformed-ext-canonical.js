

/*---
esid: sec-intl.getcanonicallocales
description: >
  Test canonicalisation within transformed extension subtags.
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
        v. If IsStructurallyValidLanguageTag(tag) is false, throw a RangeError exception.
        vi. Let canonicalizedTag be CanonicalizeUnicodeLocaleId(tag).
        ...

includes: [testIntl.js]
---*/

const testData = {
  
  "sl-t-sl-rozaj-biske-1994": "sl-t-sl-1994-biske-rozaj",

  
  "DE-T-M0-DIN-K0-QWERTZ": "de-t-k0-qwertz-m0-din",

  
  "en-t-m0-true": "en-t-m0-true",

  
  "en-t-iw": "en-t-he",

  
  "und-Latn-t-und-hani-m0-names": "und-Latn-t-und-hani-m0-prprname",
};

for (let [tag, canonical] of Object.entries(testData)) {
  
  assert(isCanonicalizedStructurallyValidLanguageTag(canonical),
         "\"" + canonical + "\" is a canonical and structurally valid language tag.");

  let result = Intl.getCanonicalLocales(tag);
  assert.sameValue(result.length, 1);
  assert.sameValue(result[0], canonical);
}

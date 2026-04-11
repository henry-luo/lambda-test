

/*---
esid: sec-intl.getcanonicallocales
description: >
  No RangeError is thrown when a language tag includes a valid transformed extension subtag.
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

const valid = [
  
  "en-t-en",

  
  "en-t-en-latn",

  
  "en-t-en-ca",

  
  "en-t-en-latn-ca",

  
  "en-t-en-emodeng",

  
  "en-t-en-latn-emodeng",

  
  "en-t-en-ca-emodeng",

  
  "en-t-en-latn-ca-emodeng",

  
  "en-t-d0-ascii",
];

const extraFields = [
  
  "",

  
  "-i0-handwrit",

  
  "-s0-accents-publish",
];

for (let tag of valid) {
  for (let extra of extraFields) {
    let actualTag = tag + extra;

    
    assert(isCanonicalizedStructurallyValidLanguageTag(actualTag),
           "\"" + actualTag + "\" is a canonical and structurally valid language tag.");

    let result = Intl.getCanonicalLocales(actualTag);
    assert.sameValue(result.length, 1);
    assert.sameValue(result[0], actualTag);
  }
}

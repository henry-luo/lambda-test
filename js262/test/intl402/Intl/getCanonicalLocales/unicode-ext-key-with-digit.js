

/*---
esid: sec-intl.getcanonicallocales
description: >
  Test Unicode extension subtags where the ukey subtag contains a digit.
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


const invalidCases = [
  "en-u-c0",
  "en-u-00",
];


const validCases = [
  "en-u-0c",
];

for (let invalid of invalidCases) {
  
  assert.sameValue(isCanonicalizedStructurallyValidLanguageTag(invalid), false,
                   "\"" + invalid + "\" isn't a structurally valid language tag.");

  assert.throws(RangeError, () => Intl.getCanonicalLocales(invalid));
}

for (let valid of validCases) {
  
  assert(isCanonicalizedStructurallyValidLanguageTag(valid),
         "\"" + valid + "\" is a canonical and structurally valid language tag.");

  let result = Intl.getCanonicalLocales(valid);
  assert.sameValue(result.length, 1);
  assert.sameValue(result[0], valid);
}

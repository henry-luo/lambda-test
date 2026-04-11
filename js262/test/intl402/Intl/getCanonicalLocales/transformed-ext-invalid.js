

/*---
esid: sec-intl.getcanonicallocales
description: >
  A RangeError is thrown when a language tag includes an invalid transformed extension subtag.
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
        ...

includes: [testIntl.js]
---*/

const invalid = [
  
  "en-t",
  "en-t-a",
  "en-t-x",
  "en-t-0",

  
  "en-t-",
  "en-t-en-",
  "en-t-0x-",

  
  "en-t-root",
  "en-t-abcdefghi",
  "en-t-ar-aao",

  
  "en-t-en-lat0",
  "en-t-en-latn-latn",

  
  "en-t-en-0",
  "en-t-en-00",
  "en-t-en-0x",
  "en-t-en-x0",
  "en-t-en-latn-0",
  "en-t-en-latn-00",
  "en-t-en-latn-xyz",

  
  "en-t-en-abcdefghi",
  "en-t-en-latn-gb-ab",
  "en-t-en-latn-gb-abc",
  "en-t-en-latn-gb-abcd",
  "en-t-en-latn-gb-abcdefghi",

  
  "en-t-d0",
  "en-t-d0-m0",
  "en-t-d0-x-private",
];

for (let tag of invalid) {
  
  assert.sameValue(isCanonicalizedStructurallyValidLanguageTag(tag), false,
                   "\"" + tag + "\" isn't a structurally valid language tag.");

  assert.throws(RangeError, () => Intl.getCanonicalLocales(tag), `${tag}`);
}

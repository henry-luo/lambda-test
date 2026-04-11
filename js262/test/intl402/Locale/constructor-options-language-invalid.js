

/*---
esid: sec-intl.locale
description: >
    Checks error cases for the options argument to the Locale
    constructor.
info: |
    Intl.Locale( tag [, options] )
    10. If options is undefined, then
    11. Else
        a. Let options be ? ToObject(options).
    12. Set tag to ? ApplyOptionsToTag(tag, options).

    ApplyOptionsToTag( tag, options )
    ...
    4. If language is not undefined, then
        a. If language does not match the language production, throw a RangeError exception.
    ...

features: [Intl.Locale]
---*/


const invalidLanguageOptions = [
  "",
  "a",
  "ab7",
  "notalanguage",
  "undefined",

  
  "root",

  
  "fr-Latn",
  "fr-FR",
  "sa-vaidika",
  "fr-a-asdf",
  "fr-x-private",

  
  "i-klingon",

  
  "zh-min",
  "zh-min-nan",

  
  "abcd-US",
  "abcde-US",
  "abcdef-US",
  "abcdefg-US",
  "abcdefgh-US",

  7,
];
for (const language of invalidLanguageOptions) {
  assert.throws(RangeError, function() {
    new Intl.Locale("en", {language});
  }, `new Intl.Locale("en", {language: "${language}"}) throws RangeError`);
}

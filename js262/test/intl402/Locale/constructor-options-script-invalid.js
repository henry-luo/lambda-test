

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
    6. If script is not undefined, then
        a. If script does not match the script production, throw a RangeError exception.
    ...

features: [Intl.Locale]
---*/


const invalidScriptOptions = [
  "",
  "a",
  "ab",
  "abc",
  "abc7",
  "notascript",
  "undefined",
  "Bal\u0130",
  "Bal\u0131",

  
  "ary-Arab",
  "Latn-SA",
  "Latn-vaidika",
  "Latn-a-asdf",
  "Latn-x-private",

  7,
];
for (const script of invalidScriptOptions) {
  assert.throws(RangeError, function() {
    new Intl.Locale("en", {script});
  }, `new Intl.Locale("en", {script: "${script}"}) throws RangeError`);
}

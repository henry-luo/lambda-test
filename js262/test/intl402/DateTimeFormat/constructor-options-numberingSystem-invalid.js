

/*---
esid: sec-createdatetimeformat
description: >
    Checks error cases for the options argument to the DateTimeFormat constructor.
info: |
    CreateDateTimeFormat ( dateTimeFormat, locales, options, required, defaults )
    ...
    27. If numberingSystem is not undefined, then
        a. If numberingSystem does not match the Unicode Locale Identifier type nonterminal, throw a RangeError exception.
---*/


const invalidNumberingSystemOptions = [
  "",
  "a",
  "ab",
  "abcdefghi",
  "abc-abcdefghi",
  "!invalid!",
  "-latn-",
  "latn-",
  "latn--",
  "latn-ca",
  "latn-ca-",
  "latn-ca-gregory",
  "latné",
  "latn编号",
];
for (const numberingSystem of invalidNumberingSystemOptions) {
  assert.throws(RangeError, function() {
    new Intl.DateTimeFormat('en', {numberingSystem});
  }, `new Intl.DateTimeFormat("en", {numberingSystem: "${numberingSystem}"}) throws RangeError`);
}

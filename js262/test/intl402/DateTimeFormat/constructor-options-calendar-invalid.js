

/*---
esid: sec-createdatetimeformat
description: >
    Checks error cases for the options argument to the DateTimeFormat constructor.
info: |
    CreateDateTimeFormat ( dateTimeFormat, locales, options, required, defaults )

    ...
    8. If calendar is not undefined, then
        a. If calendar does not match the Unicode Locale Identifier type nonterminal, throw a RangeError exception.
---*/


const invalidCalendarOptions = [
  "",
  "a",
  "ab",
  "abcdefghi",
  "abc-abcdefghi",
  "!invalid!",
  "-gregory-",
  "gregory-",
  "gregory--",
  "gregory-nu",
  "gregory-nu-",
  "gregory-nu-latn",
  "gregoryé",
  "gregory역법",
];
for (const calendar of invalidCalendarOptions) {
  assert.throws(RangeError, function() {
    new Intl.DateTimeFormat('en', {calendar});
  }, `new Intl.DateTimeFormat("en", {calendar: "${calendar}"}) throws RangeError`);
}

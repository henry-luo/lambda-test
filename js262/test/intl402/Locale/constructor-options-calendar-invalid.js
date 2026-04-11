

/*---
esid: sec-intl.locale
description: >
    Checks error cases for the options argument to the Locale
    constructor.
info: |
    Intl.Locale( tag [, options] )

    ...
    15. If calendar is not undefined, then
      a. If calendar does not match the [(3*8alphanum) *("-" (3*8alphanum))] sequence, throw a RangeError exception.
    16. Set opt.[[ca]] to calendar.

features: [Intl.Locale]
---*/


const invalidCalendarOptions = [
  "",
  "a",
  "ab",
  "abcdefghi",
  "abc-abcdefghi",
];
for (const calendar of invalidCalendarOptions) {
  assert.throws(RangeError, function() {
    new Intl.Locale("en", {calendar});
  }, `new Intl.Locale("en", {calendar: "${calendar}"}) throws RangeError`);
}

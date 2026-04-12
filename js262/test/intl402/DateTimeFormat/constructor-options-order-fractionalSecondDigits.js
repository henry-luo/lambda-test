

/*---
esid: sec-createdatetimeformat
description: Checks the order of getting options of 'fractionalSecondDigits' for the DateTimeFormat constructor.
info: |
  CreateDateTimeFormat ( newTarget, locales, options, required, defaults )
  ...
  4. Let matcher be ? GetOption(options, "localeMatcher", "string", «  "lookup", "best fit" », "best fit").
  ...
  36. For each row of Table 7, except the header row, in table order, do
    a. Let prop be the name given in the Property column of the row.
    b. If prop is "fractionalSecondDigits", then
      i. Let value be ? GetNumberOption(options, "fractionalSecondDigits", 1, 3, undefined).
    c. Else,
      i. Let values be a List whose elements are the strings given in the Values column of the row.
      ii. Let value be ? GetOption(options, prop, string, values, undefined).
    d. Set formatOptions.[[<prop>]] to value.
  37. Let matcher be ? GetOption(options, "formatMatcher", "string", «  "basic", "best fit" », "best fit").
  ...
includes: [compareArray.js]
features: [Intl.DateTimeFormat-fractionalSecondDigits]
---*/


const expected = [
  
  "localeMatcher",
  
  "second",
  "fractionalSecondDigits",
  "timeZoneName",
  
  "formatMatcher",
];

const actual = [];

const options = {
  get second() {
    actual.push("second");
    return "numeric";
  },
  get fractionalSecondDigits() {
    actual.push("fractionalSecondDigits");
    return undefined;
  },
  get localeMatcher() {
    actual.push("localeMatcher");
    return undefined;
  },
  get timeZoneName() {
    actual.push("timeZoneName");
    return undefined;
  },
  get formatMatcher() {
    actual.push("formatMatcher");
    return undefined;
  },
};

new Intl.DateTimeFormat("en", options);
assert.compareArray(actual, expected);

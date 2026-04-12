

/*---
esid: sec-temporal.plainmonthday.from
description: Time separator in string argument can vary
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const tests = [
  ["1976-05-02T15:23", "uppercase T"],
  ["1976-05-02t15:23", "lowercase T"],
  ["1976-05-02 15:23", "space between date and time"],
];

tests.forEach(([arg, description]) => {
  const result = Temporal.PlainMonthDay.from(arg);

  TemporalHelpers.assertPlainMonthDay(
    result,
    "M05", 2,
    `variant time separators (${description})`
  );
});

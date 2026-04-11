

/*---
esid: sec-temporal.plainmonthday.prototype.tolocalestring
description: toLocaleString returns a string.
features: [Temporal]
---*/

const pmd = new Temporal.PlainMonthDay(1, 1);

assert.sameValue(
  typeof pmd.toLocaleString(undefined, {calendar: "iso8601"}),
  "string"
);

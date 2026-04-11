

/*---
esid: sec-temporal.plainyearmonth.prototype.tolocalestring
description: toLocaleString returns a string.
features: [Temporal]
---*/

const pym = new Temporal.PlainYearMonth(1, 1);

assert.sameValue(
  typeof pym.toLocaleString(undefined, {calendar: "iso8601"}),
  "string"
);

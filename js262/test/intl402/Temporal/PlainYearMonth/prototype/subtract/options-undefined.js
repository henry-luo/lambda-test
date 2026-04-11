

/*---
esid: sec-temporal.plainyearmonth.prototype.subtract
description: Verify that undefined options are handled correctly.
features: [Temporal]
---*/


const yearmonth = Temporal.PlainYearMonth.from({
  year: 5779,
  monthCode: "M05L",
  calendar: "hebrew"
});
const duration = { years: 1 };

yearmonth.subtract(duration, undefined);

yearmonth.subtract(duration);

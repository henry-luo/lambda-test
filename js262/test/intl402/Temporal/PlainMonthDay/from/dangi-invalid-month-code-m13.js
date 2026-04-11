

/*---
esid: sec-temporal.plainmonthday.from
description: M13 month code is invalid for Dangi calendar (12-month calendar with leap months)
features: [Temporal, Intl.Era-monthcode]
---*/


const calendar = "dangi";

assert.throws(RangeError, () => {
  Temporal.PlainMonthDay.from({ calendar, monthCode: "M13", day: 1 });
}, `M13 should not be a valid month code for ${calendar} calendar`);


assert.throws(RangeError, () => {
  Temporal.PlainMonthDay.from({ calendar, monthCode: "M13", day: 1 }, { overflow: "constrain" });
}, `M13 should not be valid for ${calendar} calendar even with constrain overflow`);


assert.throws(RangeError, () => {
  Temporal.PlainMonthDay.from({ calendar, monthCode: "M13", day: 1 }, { overflow: "reject" });
}, `M13 should not be valid for ${calendar} calendar with reject overflow`);

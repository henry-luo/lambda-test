

/*---
esid: sec-temporal.plainmonthday.from
description: Verify that the result of ToTemporalMonthDay preserves year information for Non-ISO calendars.
info: |
    sec-temporal.plainmonthday.from step 3:
      3. Return ? ToTemporalMonthDay(_item_, _options_).
    sec-temporal-totemporalmonthday step 11.:
      11. Set result to ? CreateTemporalMonthDay(_result_.[[Month]], _result_.[[Day]], _calendar_, _result_.[[Year]]).
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const pmd = Temporal.PlainMonthDay.from("2023-01-01[u-ca=hebrew]")
TemporalHelpers.assertPlainMonthDay(pmd, "M04", 8); 

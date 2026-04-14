

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-Temporal-PlainMonthDay-shell.js]
flags:
  - noStrict
features:
  - Temporal
description: |
  pending
esid: pending
---*/


{
  let pmd = Temporal.PlainMonthDay.from({
    calendar: "coptic",
    monthCode: "M13",
    day: 7,
  });
  assert.sameValue(pmd.monthCode, "M13");
  assert.sameValue(pmd.day, 6);

  let fields = ISOFields(pmd);
  assert.sameValue(fields.calendar, "coptic");
  assert.sameValue(fields.isoYear, 1971);
  assert.sameValue(fields.isoMonth, 9);
  assert.sameValue(fields.isoDay, 11);
}




/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
features:
  - Temporal
description: |
  pending
esid: pending
---*/


let fromIso = new Temporal.PlainDate(2000, 12, 31, "indian");

let fromIndian = Temporal.PlainDate.from({
  calendar: "indian",
  year: fromIso.year,
  month: fromIso.month,
  day: fromIso.day,
});

assert.sameValue(fromIndian.equals(fromIso), true);


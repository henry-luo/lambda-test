

/*---
esid: sec-temporal.plaindate.prototype.add
description: Constrains with overflow constrain
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const jan31 = Temporal.PlainDate.from("2020-01-31");
TemporalHelpers.assertPlainDate(jan31.add({ months: 1 }, { overflow: "constrain" }),
  2020, 2, "M02", 29);

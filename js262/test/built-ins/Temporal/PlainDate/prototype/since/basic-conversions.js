

/*---
esid: sec-temporal.plaindate.prototype.since
description: Test that since() can take a string or property bag argument
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const plainDate = new Temporal.PlainDate(1969, 7, 24);

TemporalHelpers.assertDuration(plainDate.since({ year: 2019, month: 7, day: 24 }), 0, 0, 0,  -18262, 0, 0, 0, 0, 0, 0, "option bag");
TemporalHelpers.assertDuration(plainDate.since("2019-07-24"), 0, 0, 0,  -18262, 0, 0, 0, 0, 0, 0, "string");



/*---
esid: sec-temporal.plaindatetime.prototype.withplaindate
description: basic tests for toPlainDate
includes: [temporalHelpers.js]
features: [Temporal]
---*/

let d1 = new Temporal.PlainDateTime(2021, 12, 11, 1, 2, 3, 4, 5, 6);
TemporalHelpers.assertPlainDate(d1.toPlainDate(), 2021, 12, 'M12', 11);



/*---
esid: sec-get-temporal.plaindatetime.prototype.yearofweek
description: Checking yearOfWeek for a "normal" case (non-undefined, non-boundary case, etc.)
features: [Temporal]
---*/

const datetime = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789, "iso8601");
assert.sameValue(datetime.yearOfWeek, 1976, "check yearOfWeek information");

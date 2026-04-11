

/*---
esid: sec-temporal.plaintime.from
description: Verify that undefined options are handled correctly.
features: [Temporal]
---*/

const fields = { hour: 12, minute: 60 };

const explicit = Temporal.PlainTime.from(fields, undefined);
assert.sameValue(explicit.minute, 59, "default overflow is constrain");

const implicit = Temporal.PlainTime.from(fields);
assert.sameValue(implicit.minute, 59, "default overflow is constrain");

const lambda = Temporal.PlainTime.from(fields, () => {});
assert.sameValue(lambda.minute, 59, "default overflow is constrain");



/*---
esid: sec-temporal.duration.prototype.total
description: Missing time units in relativeTo property bag default to 0
features: [Temporal]
---*/

const instance = new Temporal.Duration(1, 0, 0, 0, 24);

let relativeTo = { year: 2000, month: 1, day: 1 };
const result = instance.total({ unit: "days", relativeTo });
assert.sameValue(result, 367, "missing time units default to 0");

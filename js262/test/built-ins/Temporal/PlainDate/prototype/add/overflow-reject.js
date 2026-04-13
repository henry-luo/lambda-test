

/*---
esid: sec-temporal.plaindate.prototype.add
description: Throws with overflow reject
features: [Temporal]
---*/

const jan31 = Temporal.PlainDate.from("2020-01-31");
assert.throws(RangeError, () => jan31.add({ months: 1 }, { overflow: "reject" }));



/*---
esid: sec-temporal.duration.prototype.total
description: Does not lose precision for seconds and smaller units.
features: [Temporal]
---*/

const d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 2, 31, 0);

assert.sameValue(d.total({ unit: "seconds" }), 0.002031);

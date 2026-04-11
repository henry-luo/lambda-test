

/*---
esid: sec-temporal.zoneddatetime.from
description: Constrain overflow option has no effect on invalid ISO string.
features: [Temporal]
---*/

assert.throws(RangeError, () => Temporal.ZonedDateTime.from("2020-13-34T24:60[-08:00]", { overflow: "constrain" }));

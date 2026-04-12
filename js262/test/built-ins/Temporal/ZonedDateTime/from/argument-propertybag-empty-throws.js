

/*---
esid: sec-temporal.zoneddatetime.from
description: Temporal.ZonedDateTime.from({}) throws.
features: [Temporal]
---*/


assert.throws(TypeError, () => Temporal.ZonedDateTime.from({}))

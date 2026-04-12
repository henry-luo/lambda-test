

/*---
esid: sec-temporal.zoneddatetime
description: TypeError thrown when constructor invoked with no argument
features: [Temporal]
---*/

assert.throws(TypeError, () => new Temporal.ZonedDateTime());

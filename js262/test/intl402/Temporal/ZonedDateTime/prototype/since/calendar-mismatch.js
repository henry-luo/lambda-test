

/*---
esid: sec-temporal.zoneddatetime.prototype.since
description: >
  Arithmetic between instances with two different calendars is disallowed
features: [Temporal]
---*/

const instance1 = new Temporal.ZonedDateTime(0n, "UTC", "iso8601");
const instance2 = new Temporal.ZonedDateTime(0n, "UTC", "japanese");
assert.throws(RangeError, () => instance1.since(instance2));

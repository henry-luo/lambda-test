

/*---
esid: sec-temporal.duration.prototype.total
description: Time zone IDs are valid input for a time zone
features: [Temporal]
---*/

const instance = new Temporal.Duration(1);


["UTC", "+01:00"].forEach((timeZone) => {
  instance.total({ unit: "months", relativeTo: { year: 2000, month: 5, day: 2, timeZone } });
});

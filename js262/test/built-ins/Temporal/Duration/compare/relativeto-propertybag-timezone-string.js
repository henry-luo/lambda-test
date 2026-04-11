

/*---
esid: sec-temporal.duration.compare
description: Time zone IDs are valid input for a time zone
features: [Temporal]
---*/


["UTC", "+01:00"].forEach((timeZone) => {
  Temporal.Duration.compare(new Temporal.Duration(1), new Temporal.Duration(), { relativeTo: { year: 2000, month: 5, day: 2, timeZone } });
});

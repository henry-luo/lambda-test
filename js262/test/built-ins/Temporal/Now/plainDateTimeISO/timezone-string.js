

/*---
esid: sec-temporal.now.plaindatetimeiso
description: Time zone IDs are valid input for a time zone
features: [Temporal]
---*/


["UTC", "+01:00"].forEach((timeZone) => {
  Temporal.Now.plainDateTimeISO(timeZone);
});

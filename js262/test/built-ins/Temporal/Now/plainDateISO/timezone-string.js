

/*---
esid: sec-temporal.now.plaindateiso
description: Time zone IDs are valid input for a time zone
features: [Temporal]
---*/


["UTC", "+01:00"].forEach((timeZone) => {
  Temporal.Now.plainDateISO(timeZone);
});



/*---
esid: sec-temporal.now.timezoneid
description: Temporal.Now.timeZoneId returns a string
info: |
  1. Return DefaultTimeZone().
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Now.timeZoneId(),
  "string",
  "Temporal.Now.timeZoneId() returns a string"
);

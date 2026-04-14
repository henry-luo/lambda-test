

/*---
esid: sec-temporal.plaindatetime
description: Calendar ID is canonicalized
features: [Temporal]
---*/

const result = new Temporal.PlainDateTime(2024, 7, 2, 12, 34, 56, 987, 654, 321, "islamicc");
assert.sameValue(result.calendarId, "islamic-civil", "calendar ID is canonicalized");

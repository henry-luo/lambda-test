

/*---
esid: sec-temporal.plaindate.prototype.equals
description: equals with a valid string (non-ISO calendar)
features: [Temporal]
---*/

const instance = new Temporal.PlainDate(2000, 5, 2);
assert.sameValue(instance.equals("2000-05-02[u-ca=gregory]"), false, "different calendar");

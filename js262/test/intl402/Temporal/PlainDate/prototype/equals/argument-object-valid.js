

/*---
esid: sec-temporal.plaindate.prototype.equals
description: equals with a valid property bag
features: [Temporal]
---*/

const instance = new Temporal.PlainDate(2000, 5, 2);
assert.sameValue(instance.equals({ year: 2000, month: 5, day: 2 }), true, "same date");
assert.sameValue(instance.equals({ year: 2000, month: 5, day: 4 }), false, "different date");
assert.sameValue(instance.equals({ year: 2000, month: 5, day: 2, calendar: "gregory" }),
  false, "different calendar");

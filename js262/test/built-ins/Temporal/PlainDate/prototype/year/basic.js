

/*---
esid: sec-get-temporal.plaindate.prototype.year
description: The "year" property of Temporal.PlainDate.prototype
features: [Temporal]
---*/

assert.sameValue((new Temporal.PlainDate(2021, 7, 15)).year, 2021);
assert.sameValue(Temporal.PlainDate.from('2019-03-15').year, 2019);

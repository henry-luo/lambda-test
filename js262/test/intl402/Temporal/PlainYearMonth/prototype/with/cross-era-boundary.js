

/*---
esid: sec-temporal.plainyearmonth.prototype.with
description: Behaviour when property bag forms a date out of bounds of the current era
features: [Temporal, Intl.Era-monthcode]
---*/


const instance = Temporal.PlainYearMonth.from({ year: 1989, month: 1, calendar: "japanese" });

const result2 = instance.with({ month: 2 });
assert.notSameValue(result2.era, instance.era, "resulting month should have crossed an era boundary");

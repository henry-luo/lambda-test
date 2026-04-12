

/*---
esid: sec-temporal.plaindate.prototype.monthsinyear
description: Always 12 months in a year in the Buddhist calendar
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "buddhist";
const options = { overflow: "reject" };


for (var year = 2513; year < 2593; year++) {
    const date = Temporal.PlainDate.from({
        year,
        month: 1,
        calendar, day: 1
    });

    assert.sameValue(date.monthsInYear, 12);
}

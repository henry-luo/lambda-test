

/*---
esid: sec-temporal.plaindate.prototype.monthsinyear
description: Always 12 months in a year in the Persian calendar
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "persian";
const options = { overflow: "reject" };


for (var year = 1348; year < 1428; year++) {
    const date = Temporal.PlainDate.from({
        year,
        month: 1,
        calendar, day: 1
    });

    assert.sameValue(date.monthsInYear, 12);
}

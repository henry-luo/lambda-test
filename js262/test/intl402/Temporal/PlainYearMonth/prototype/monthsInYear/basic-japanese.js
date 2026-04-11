

/*---
esid: sec-temporal.plainyearmonth.prototype.monthsinyear
description: Always 12 months in a year in the Japanese calendar
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "japanese";
const options = { overflow: "reject" };


for (var year = 1892; year < 1972; year++) {
    const date = Temporal.PlainYearMonth.from({
        year,
        month: 1,
        calendar
    });

    assert.sameValue(date.monthsInYear, 12);
}

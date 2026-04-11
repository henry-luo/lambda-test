

/*---
esid: sec-temporal.plainyearmonth.prototype.monthsinyear
description: Always 12 months in a year in the roc calendar
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "roc";
const options = { overflow: "reject" };


for (var year = 59; year < 139; year++) {
    const date = Temporal.PlainYearMonth.from({
        year,
        month: 1,
        calendar
    });

    assert.sameValue(date.monthsInYear, 12);
}

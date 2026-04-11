

/*---
esid: sec-temporal.plainyearmonth.prototype.monthsinyear
description: Always 12 months in a year in the islamic-tbla calendar
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "islamic-tbla";
const options = { overflow: "reject" };


for (var year = 1390; year < 1470; year++) {
    const date = Temporal.PlainYearMonth.from({
        year,
        month: 1,
        calendar
    });
    assert.sameValue(date.monthsInYear, 12);
}

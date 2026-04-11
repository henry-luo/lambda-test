

/*---
esid: sec-temporal.plainyearmonth.prototype.monthsinyear
description: Always 13 months in a year in the Coptic calendar
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "coptic";
const options = { overflow: "reject" };


for (var year = 1686; year < 1766; year++) {
    const date = Temporal.PlainYearMonth.from({
        year,
        month: 1,
        calendar
    });

    assert.sameValue(date.monthsInYear, 13);
}

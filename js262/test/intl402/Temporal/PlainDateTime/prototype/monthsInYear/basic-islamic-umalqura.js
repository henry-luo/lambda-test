

/*---
esid: sec-temporal.plaindatetime.prototype.monthsinyear
description: Always 12 months in a year in the islamic-umalqura calendar
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "islamic-umalqura";
const options = { overflow: "reject" };


for (var year = 1390; year < 1470; year++) {
    const date = Temporal.PlainDateTime.from({
        year,
        month: 1,
        calendar, day: 1, hour: 12, minute: 34
    });

    assert.sameValue(date.monthsInYear, 12);
}

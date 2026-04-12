

/*---
esid: sec-temporal.plaindate.prototype.monthsinyear
description: Always 12 months in a year in the Indian calendar
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "indian";
const options = { overflow: "reject" };


for (var year = 1892; year < 1972; year++) {
    const date = Temporal.PlainDate.from({
        year,
        month: 1,
        calendar, day: 1
    });

    assert.sameValue(date.monthsInYear, 12);
}

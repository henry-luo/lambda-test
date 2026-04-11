

/*---
esid: sec-temporal.plaindatetime.prototype.monthsinyear
description: Always 13 months in a year in the ethioaa calendar
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "ethioaa";
const options = { overflow: "reject" };


for (var year = 7462; year < 7542; year++) {
    const date = Temporal.PlainDateTime.from({
        year,
        month: 1,
        calendar, day: 1, hour: 12, minute: 34
    });

    assert.sameValue(date.monthsInYear, 13);
}

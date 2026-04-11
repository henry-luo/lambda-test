

/*---
esid: sec-temporal.zoneddatetime.prototype.monthsinyear
description: Always 13 months in a year in the Coptic calendar
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "coptic";
const options = { overflow: "reject" };


for (var year = 1686; year < 1766; year++) {
    const date = Temporal.ZonedDateTime.from({
        year,
        month: 1,
        calendar, day: 1, hour: 12, minute: 34, timeZone: "UTC"
    });

    assert.sameValue(date.monthsInYear, 13);
}

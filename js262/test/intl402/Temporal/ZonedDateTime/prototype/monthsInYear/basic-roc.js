

/*---
esid: sec-temporal.zoneddatetime.prototype.monthsinyear
description: Always 12 months in a year in the roc calendar
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "roc";
const options = { overflow: "reject" };


for (var year = 59; year < 139; year++) {
    const date = Temporal.ZonedDateTime.from({
        year,
        month: 1,
        calendar, day: 1, hour: 12, minute: 34, timeZone: "UTC"
    });

    assert.sameValue(date.monthsInYear, 12);
}

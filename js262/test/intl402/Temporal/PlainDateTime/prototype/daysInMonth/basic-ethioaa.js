

/*---
esid: sec-temporal.plaindatetime.prototype.daysinmonth
description: Days in each month in the ethioaa calendar
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "ethioaa";
const options = { overflow: "reject" };


const leapYear = 7463;
const commonYear = 7464;

for (var year of [leapYear, commonYear]) {
  for (var month = 1; month < 14; month++) {
    const date = Temporal.PlainDateTime.from({
      year,
      month,
      day: 1,
      calendar, hour: 12, minute: 34
    });
    if (month !== 13)
      assert.sameValue(date.daysInMonth, 30, `${date}`);
    else if (year == leapYear)
      assert.sameValue(date.daysInMonth, 6, `${date}`);
    else
      assert.sameValue(date.daysInMonth, 5, `${date}`);
  }
}


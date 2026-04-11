

/*---
esid: sec-createdatetimeformat
description: >
    Conflicting properties of dateStyle/timeStyle must be rejected with a TypeError for the options argument to the DateTimeFormat constructor.
info: |
    InitializeDateTimeFormat ( dateTimeFormat, locales, options )

    ...
    43. If dateStyle is not undefined or timeStyle is not undefined, then
      a. If hasExplicitFormatComponents is true, then
        i. Throw a TypeError exception.
      b. If required is date and timeStyle is not undefined, then
        i. Throw a TypeError exception.
      c. If required is time and dateStyle is not undefined, then
        i. Throw a TypeError exception.
---*/


const conflictingOptions = [
 [ "weekday", "short" ],
 [ "era", "short" ],
 [ "year", "numeric" ],
 [ "month", "numeric" ],
 [ "day", "numeric" ],
 [ "dayPeriod", "short" ],
 [ "hour", "numeric" ],
 [ "minute", "numeric" ],
 [ "second", "numeric" ],
 [ "fractionalSecondDigits", 3 ],
 [ "timeZoneName", "short" ],
];

for (const [ option, value ] of conflictingOptions) {
  assert.throws(TypeError, function() {
    new Intl.DateTimeFormat("en", { [option]: value, dateStyle: "short" });
  }, `new Intl.DateTimeFormat("en", { ${option}: "${value}",  dateStyle: "short" }) throws TypeError`);

  assert.throws(TypeError, function() {
    new Intl.DateTimeFormat("en", { [option]: value, timeStyle: "short" });
  }, `new Intl.DateTimeFormat("en", { ${option}: "${value}",  timeStyle: "short" }) throws TypeError`);
}

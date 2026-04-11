

/*---
esid: sup-temporal.plaindate.prototype.tolocalestring
description: >
    Conflicting properties of dateStyle must be rejected with a TypeError for the options argument
info: |
    Using sec-temporal-getdatetimeformatpattern:
    GetDateTimeFormatPattern ( dateStyle, timeStyle, matcher, opt, dataLocaleData, hc )

    1. If dateStyle is not undefined or timeStyle is not undefined, then
      a. For each row in Table 7, except the header row, do
        i. Let prop be the name given in the Property column of the row.
        ii. Let p be opt.[[<prop>]].
        iii. If p is not undefined, then
          1. Throw a TypeError exception.
features: [Temporal]
---*/


const conflictingOptions = [
  [ "weekday", "short" ],
  [ "era", "short" ],
  [ "year", "numeric" ],
  [ "month", "numeric" ],
  [ "day", "numeric" ],
];
const date = new Temporal.PlainDate(2000, 5, 2);

assert.sameValue(typeof date.toLocaleString("en", { dateStyle: "short" }), "string");

assert.throws(TypeError, function () {
  date.toLocaleString("en", { timeStyle: "short" });
}, "timeStyle conflicts with PlainDate");

for (const [ option, value ] of conflictingOptions) {
  assert.throws(TypeError, function() {
    date.toLocaleString("en", { [option]: value, dateStyle: "short" });
  }, `date.toLocaleString("en", { ${option}: "${value}",  dateStyle: "short" }) throws TypeError`);

  
  date.toLocaleString("en", { [option]: value, dateStyle: undefined });
  date.toLocaleString("en", { [option]: value, timeStyle: undefined });
}

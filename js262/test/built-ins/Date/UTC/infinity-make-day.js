

/*---
esid: sec-date.utc
description: Infinite values specified to MakeDay produce NaN
info: |
  [...]
  9. Return TimeClip(MakeDate(MakeDay(yr, m, dt), MakeTime(h, min, s, milli))).

  MakeDay (year, month, date)

  1. If year is not finite or month is not finite or date is not finite, return
     NaN.
---*/

assert.sameValue(Date.UTC(Infinity), NaN, 'year: Infinity - single arg');
assert.sameValue(Date.UTC(-Infinity), NaN, 'year: -Infinity - single arg');

assert.sameValue(Date.UTC(Infinity, 0), NaN, 'year: Infinity');
assert.sameValue(Date.UTC(-Infinity, 0), NaN, 'year: -Infinity');

assert.sameValue(Date.UTC(0, Infinity), NaN, 'month: Infinity');
assert.sameValue(Date.UTC(0, -Infinity), NaN, 'month: -Infinity');

assert.sameValue(Date.UTC(0, 0, Infinity), NaN, 'date: Infinity');
assert.sameValue(Date.UTC(0, 0, -Infinity), NaN, 'date: -Infinity');


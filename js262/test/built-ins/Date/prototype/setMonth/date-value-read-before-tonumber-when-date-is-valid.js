

/*---
esid: sec-date.prototype.setmonth
description: >
  Read [[DateValue]] and then call ToNumber when stored time-value is valid.
info: |
  Date.prototype.setMonth ( month [ , date ] )

  ...
  3. Let t be dateObject.[[DateValue]].
  4. Let m be ? ToNumber(month).
  5. If date is present, let dt be ? ToNumber(date).
  6. If t is NaN, return NaN.
  7. Set t to LocalTime(t).
  ...
---*/

var dt = new Date(0);


dt.setDate(2);

var valueOfCalled = 0;

var value = {
  valueOf() {
    valueOfCalled++;
    dt.setTime(NaN);
    return 1;
  }
};

var result = dt.setMonth(value);

assert.sameValue(valueOfCalled, 1, "valueOf called exactly once");

assert.notSameValue(result, NaN, "result is not NaN");

assert.sameValue(result, dt.getTime(), "result is equal to getTime");

assert.sameValue(dt.getMonth(), 1, "date value correctly updated");

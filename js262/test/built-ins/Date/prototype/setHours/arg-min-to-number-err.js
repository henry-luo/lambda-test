

/*---
esid: sec-date.prototype.sethours
description: Abrupt completion during type coercion of provided "min"
info: |
  1. Let t be LocalTime(? thisTimeValue(this value)).
  2. Let dt be ? ToNumber(hour).
  3. If min is not specified, let m be MinFromTime(t); otherwise, let m be ?
     ToNumber(min).
---*/

var date = new Date(0);
var callCount = 0;
var originalValue = date.getTime();
var obj = {
  valueOf: function() {
    throw new Test262Error();
  }
};
var counter = {
  valueOf: function() {
    callCount += 1;
  }
};

assert.throws(Test262Error, function() {
  date.setHours(0, obj, counter, counter);
});

assert.sameValue(date.getTime(), originalValue);
assert.sameValue(callCount, 0);



/*---
esid: sec-date.prototype.setminutes
description: Abrupt completion during type coercion of provided "sec"
info: |
  1. Let t be LocalTime(? thisTimeValue(this value)).
  2. Let m be ? ToNumber(min).
  3. If sec is not specified, let s be SecFromTime(t); otherwise, let s be ?
     ToNumber(sec).
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
  date.setMinutes(0, 0, obj, counter);
});

assert.sameValue(date.getTime(), originalValue);
assert.sameValue(callCount, 0);

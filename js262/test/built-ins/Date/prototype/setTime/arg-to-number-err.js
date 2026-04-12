

/*---
esid: sec-date.prototype.settime
description: Abrupt completion during type coercion of provided argument
info: |
  1. Perform ? thisTimeValue(this value).
  2. Let t be ? ToNumber(time).
---*/

var date = new Date(0);
var originalValue = date.getTime();
var obj = {
  valueOf: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  date.setTime(obj);
});

assert.sameValue(date.getTime(), originalValue);

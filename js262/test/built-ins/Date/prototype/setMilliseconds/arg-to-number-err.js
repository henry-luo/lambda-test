

/*---
esid: sec-date.prototype.setmilliseconds
description: Abrupt completion during type coercion of provided argument
info: |
  1. Let t be LocalTime(? thisTimeValue(this value)).
  2. Let dt be ? ToNumber(date).
---*/

var date = new Date(0);
var originalValue = date.getTime();
var obj = {
  valueOf: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  date.setMilliseconds(obj);
});

assert.sameValue(date.getTime(), originalValue);

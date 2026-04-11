

/*---
esid: sec-date.prototype.setyear
es6id: B.2.4.2
es5id: B.2.5
description: Behavior when "this" value has no [[DateValue]] internal slot
info: |
    1. Let t be ? thisTimeValue(this value).
---*/

var setYear = Date.prototype.setYear;

assert.sameValue(typeof setYear, 'function');

assert.throws(TypeError, function() {
  setYear.call({}, 1);
}, 'object');

assert.throws(TypeError, function() {
  setYear.call(undefined, 1);
}, 'undefined');

assert.throws(TypeError, function() {
  setYear.call(null, 1);
}, 'null');

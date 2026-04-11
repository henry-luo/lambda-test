

/*---
esid: sec-date.prototype.getminutes
description: >
  Behavior when "this" value is an Object without a [[DateValue]] internal slot
info: |
  1. Let t be ? thisTimeValue(this value).

  The abstract operation thisTimeValue(value) performs the following steps:

  1. If Type(value) is Object and value has a [[DateValue]] internal slot, then
     a. Return value.[[DateValue]].
  2. Throw a TypeError exception.
---*/

var getMinutes = Date.prototype.getMinutes;
var args = (function() {
  return arguments;
}());

assert.sameValue(typeof getMinutes, 'function');

assert.throws(TypeError, function() {
  getMinutes.call({});
}, 'ordinary object');

assert.throws(TypeError, function() {
  getMinutes.call([]);
}, 'array exotic object');

assert.throws(TypeError, function() {
  getMinutes.call(args);
}, 'arguments exotic object');

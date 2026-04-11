

/*---
esid: sec-date.prototype.getseconds
description: >
  Behavior when "this" value is an Object without a [[DateValue]] internal slot
info: |
  1. Let t be ? thisTimeValue(this value).

  The abstract operation thisTimeValue(value) performs the following steps:

  1. If Type(value) is Object and value has a [[DateValue]] internal slot, then
     a. Return value.[[DateValue]].
  2. Throw a TypeError exception.
---*/

var getSeconds = Date.prototype.getSeconds;
var args = (function() {
  return arguments;
}());

assert.sameValue(typeof getSeconds, 'function');

assert.throws(TypeError, function() {
  getSeconds.call({});
}, 'ordinary object');

assert.throws(TypeError, function() {
  getSeconds.call([]);
}, 'array exotic object');

assert.throws(TypeError, function() {
  getSeconds.call(args);
}, 'arguments exotic object');

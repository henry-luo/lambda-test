

/*---
esid: sec-date.prototype.getminutes
description: Behavior when "this" value is not an Object
info: |
  1. Let t be ? thisTimeValue(this value).

  The abstract operation thisTimeValue(value) performs the following steps:

  1. If Type(value) is Object and value has a [[DateValue]] internal slot, then
     a. Return value.[[DateValue]].
  2. Throw a TypeError exception.
features: [Symbol]
---*/

var getMinutes = Date.prototype.getMinutes;
var symbol = Symbol();

assert.sameValue(typeof getMinutes, 'function');

assert.throws(TypeError, function() {
  getMinutes.call(0);
}, 'number');

assert.throws(TypeError, function() {
  getMinutes.call(true);
}, 'boolean');

assert.throws(TypeError, function() {
  getMinutes.call(null);
}, 'null');

assert.throws(TypeError, function() {
  getMinutes.call(undefined);
}, 'undefined');

assert.throws(TypeError, function() {
  getMinutes.call('');
}, 'string');

assert.throws(TypeError, function() {
  getMinutes.call(symbol);
}, 'symbol');

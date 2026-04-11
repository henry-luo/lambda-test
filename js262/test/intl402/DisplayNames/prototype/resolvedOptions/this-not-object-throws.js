

/*---
esid: sec-Intl.DisplayNames.prototype.resolvedOptions
description: >
  Throws a TypeError if this is not Object.
info: |
  Intl.DisplayNames.prototype.resolvedOptions ()

  1. Let pr be the this value.
  2. If Type(pr) is not Object or pr does not have an [[InitializedDisplayNames]] internal slot,
    throw a TypeError exception.
  ...
features: [Intl.DisplayNames, Symbol]
---*/

var resolvedOptions = Intl.DisplayNames.prototype.resolvedOptions;

assert.throws(TypeError, function() {
  resolvedOptions();
}, 'direct call');

assert.throws(TypeError, function() {
  resolvedOptions.call('en');
}, 'string');

assert.throws(TypeError, function() {
  resolvedOptions.call(1);
}, 'number');

assert.throws(TypeError, function() {
  resolvedOptions.call(null);
}, 'null');

assert.throws(TypeError, function() {
  resolvedOptions.call(true);
}, 'true');

assert.throws(TypeError, function() {
  resolvedOptions.call(false);
}, 'false');

var symbol = Symbol();
assert.throws(TypeError, function() {
  resolvedOptions.call(symbol);
}, 'symbol');

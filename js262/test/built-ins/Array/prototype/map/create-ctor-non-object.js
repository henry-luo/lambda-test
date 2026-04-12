

/*---
esid: sec-array.prototype.map
description: >
    Behavior when `constructor` property is neither an Object nor undefined
info: |
    [...]
    5. Let A be ? ArraySpeciesCreate(O, len).
    [...]

    9.4.2.3 ArraySpeciesCreate

    [...]
    5. Let C be ? Get(originalArray, "constructor").
    [...]
    9. If IsConstructor(C) is false, throw a TypeError exception.
---*/

var a = [];
var callCount = 0;
var cb = function() {
  callCount += 0;
};

a.constructor = null;
assert.throws(TypeError, function() {
  a.map(cb);
}, 'null value');
assert.sameValue(callCount, 0, 'callback not invoked (null value)');

a = [];
a.constructor = 1;
assert.throws(TypeError, function() {
  a.map(cb);
}, 'number value');
assert.sameValue(callCount, 0, 'callback not invoked (number value)');

a = [];
a.constructor = 'string';
assert.throws(TypeError, function() {
  a.map(cb);
}, 'string value');
assert.sameValue(callCount, 0, 'callback not invoked (string value)');

a = [];
a.constructor = true;
assert.throws(TypeError, function() {
  a.map(cb);
}, 'boolean value');
assert.sameValue(callCount, 0, 'callback not invoked (boolean value)');

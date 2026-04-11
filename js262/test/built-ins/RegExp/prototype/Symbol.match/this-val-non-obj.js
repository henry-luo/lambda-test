

/*---
description: The `this` value must be an object
es6id: 21.2.5.6
info: |
    1. Let rx be the this value.
    2. If Type(rx) is not Object, throw a TypeError exception.
features: [Symbol.match]
---*/

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.match].call(undefined);
});

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.match].call(null);
});

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.match].call(true);
});

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.match].call('string');
});

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.match].call(Symbol.match);
});

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.match].call(86);
});

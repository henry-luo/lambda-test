

/*---
esid: sec-object.prototype.__proto__
es6id: B.2.2.1
description: Abrupt completion from ToObject
info: |
    1. Let O be ? ToObject(this value).
features: [__proto__]
---*/

var get = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').get;

assert.sameValue(typeof get, 'function');

assert.throws(TypeError, function() {
  get.call(undefined);
});

assert.throws(TypeError, function() {
  get.call(null);
});

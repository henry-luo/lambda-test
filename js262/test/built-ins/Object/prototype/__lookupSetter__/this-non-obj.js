

/*---
esid: sec-additional-properties-of-the-object.prototype-object
description: Behavior when "this" value is not Object-coercible
info: |
    1. Let O be ? ToObject(this value).
features: [__setter__]
---*/

var __lookupSetter__ = Object.prototype.__lookupSetter__;
var toStringCount = 0;
var key = {
  toString: function() {
    toStringCount += 1;
  }
};

assert.sameValue(typeof __lookupSetter__, 'function');

assert.throws(TypeError, function() {
  __lookupSetter__.call(undefined, key);
}, 'undefined');

assert.throws(TypeError, function() {
  __lookupSetter__.call(null, key);
}, 'null');

assert.sameValue(toStringCount, 0);

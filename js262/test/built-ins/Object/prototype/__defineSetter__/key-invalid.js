

/*---
esid: sec-additional-properties-of-the-object.prototype-object
description: Behavior when property key cannot be derived
info: |
    [...]
    4. Let key be ? ToPropertyKey(P).
features: [__setter__]
---*/

var noop = function() {};
var subject = {};
var key = {
  toString: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  subject.__defineSetter__(key, noop);
});

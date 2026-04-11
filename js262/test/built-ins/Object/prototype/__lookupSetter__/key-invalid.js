

/*---
esid: sec-additional-properties-of-the-object.prototype-object
description: Behavior when property key cannot be derived
info: |
    [...]
    2. Let key be ? ToPropertyKey(P).
features: [__setter__]
---*/

var subject = {};
var key = {
  toString: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  subject.__lookupSetter__(key);
});



/*---
esid: sec-set.prototype.has
description: >
    Set.prototype.has ( value )

    1. Let S be the this value.
    2. If Type(S) is not Object, throw a TypeError exception.

features: [Symbol]
---*/

assert.throws(TypeError, function() {
  Set.prototype.has.call(Symbol(), 1);
});

assert.throws(TypeError, function() {
  var s = new Set();
  s.has.call(Symbol(), 1);
});



/*---
esid: sec-set.prototype.clear
description: >
    Set.prototype.clear ( )

    1. Let S be the this value.
    2. If Type(S) is not Object, throw a TypeError exception.

features: [Symbol]
---*/

assert.throws(TypeError, function() {
  Set.prototype.clear.call(Symbol());
});

assert.throws(TypeError, function() {
  var s = new Set();
  s.clear.call(Symbol());
});

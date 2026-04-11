

/*---
esid: sec-set.prototype.entries
description: >
    Set.prototype.entries ( )

    ...
    2. Return CreateSetIterator(S, "key+value").


    23.2.5.1 CreateSetIterator Abstract Operation

    1. If Type(set) is not Object, throw a TypeError exception.
    ...
features: [Symbol]
---*/

assert.throws(TypeError, function() {
  Set.prototype.entries.call(Symbol());
});

assert.throws(TypeError, function() {
  var s = new Set();
  s.entries.call(Symbol());
});

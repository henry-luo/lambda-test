

/*---
esid: sec-set.prototype.values
description: >
    Set.prototype.values ( )

    ...
    2. Return CreateSetIterator(S, "value").


    23.2.5.1 CreateSetIterator Abstract Operation

    1. If Type(set) is not Object, throw a TypeError exception.
    ...

---*/

assert.throws(TypeError, function() {
  Set.prototype.values.call(false);
});

assert.throws(TypeError, function() {
  var s = new Set();
  s.values.call(false);
});

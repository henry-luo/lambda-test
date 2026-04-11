

/*---
esid: sec-set.prototype.delete
description: >
    Set.prototype.delete ( value )

    ...
    3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
    ...

---*/

assert.throws(TypeError, function() {
  Set.prototype.delete.call([], 1);
});

assert.throws(TypeError, function() {
  var s = new Set();
  s.delete.call([], 1);
});

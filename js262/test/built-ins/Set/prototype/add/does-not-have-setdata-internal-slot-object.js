

/*---
esid: sec-set.prototype.add
description: >
    Set.prototype.add ( value )

    ...
    3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
    ...

---*/

assert.throws(TypeError, function() {
  Set.prototype.add.call({}, 1);
});

assert.throws(TypeError, function() {
  var s = new Set();
  s.add.call({}, 1);
});

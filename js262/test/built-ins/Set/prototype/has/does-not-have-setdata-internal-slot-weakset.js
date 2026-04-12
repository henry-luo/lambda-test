

/*---
esid: sec-set.prototype.has
description: >
    Set.prototype.has ( value )

    ...
    3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
    ...
features: [WeakSet]
---*/

assert.throws(TypeError, function() {
  Set.prototype.has.call(new WeakSet(), 1);
});

assert.throws(TypeError, function() {
  var s = new Set();
  s.has.call(new WeakSet(), 1);
});

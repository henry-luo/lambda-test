

/*---
esid: sec-weakset.prototype.add
description: Throws TypeError if `this` is not Object.
info: |
  WeakSet.prototype.add ( value )

  1. Let S be the this value.
  2. If Type(S) is not Object, throw a TypeError exception.

---*/

assert.throws(TypeError, function() {
  WeakSet.prototype.add.call(0, {});
});

assert.throws(TypeError, function() {
  var s = new WeakSet();
  s.add.call(0, {});
});

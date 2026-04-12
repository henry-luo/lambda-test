

/*---
esid: sec-set.prototype.foreach
description: >
    Set.prototype.forEach ( callbackfn [ , thisArg ] )

    ...
    3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
    ...

---*/

assert.throws(TypeError, function() {
  Set.prototype.forEach.call(new Map(), function() {});
});

assert.throws(TypeError, function() {
  var s = new Set();
  s.forEach.call(new Map(), function() {});
});

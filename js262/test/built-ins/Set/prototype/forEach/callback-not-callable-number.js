

/*---
esid: sec-set.prototype.foreach
description: >
    Set.prototype.forEach ( callbackfn [ , thisArg ] )

    ...
    4. If IsCallable(callbackfn) is false, throw a TypeError exception.
    ...

    Passing `number` as callback

---*/

var s = new Set([1]);

assert.throws(TypeError, function() {
  s.forEach(0);
});

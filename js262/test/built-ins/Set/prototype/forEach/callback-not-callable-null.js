

/*---
esid: sec-set.prototype.forEach
description: >
    Set.prototype.forEach ( callbackfn [ , thisArg ] )

    ...
    4. If IsCallable(callbackfn) is false, throw a TypeError exception.
    ...

    Passing `null` as callback

---*/

var s = new Set([1]);

assert.throws(TypeError, function() {
  s.forEach(null);
});

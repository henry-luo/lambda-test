

/*---
esid: sec-set.prototype.forEach
description: >
    Set.prototype.forEach ( callbackfn [ , thisArg ] )

    ...
    8. Return undefined.

---*/

var s = new Set([1]);

assert.sameValue(
  s.forEach(function() {}),
  undefined,
  "`s.forEach(function() {})` returns `undefined`"
);



/*---
esid: sec-set.prototype.has
description: >
    Set.prototype.has ( value )

    ...
    5. Repeat for each e that is an element of entries,
      a. If e is not empty and SameValueZero(e, value) is true, return true.
    ...

---*/

var s = new Set();

s.add(false)

assert.sameValue(s.has(false), true, "`s.has(false)` returns `true`");

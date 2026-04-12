

/*---
esid: sec-set.prototype.has
description: >
    Set.prototype.has ( value )

    ...
    6. Return false.

---*/

var s = new Set();

assert.sameValue(s.has(false), false, "`s.has(false)` returns `false`");

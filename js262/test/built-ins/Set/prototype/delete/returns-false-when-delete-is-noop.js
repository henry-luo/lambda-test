

/*---
esid: sec-set.prototype.delete
description: >
    Set.prototype.delete ( value )

    ...
    6. Return false.

---*/

var s = new Set();

assert.sameValue(s.delete(1), false, "`s.delete(1)` returns `false`");

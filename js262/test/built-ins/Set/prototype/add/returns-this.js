

/*---
esid: sec-set.prototype.add
description: >
    Set.prototype.add ( value )

    1. Let S be this value.
    ...
    8. Return S.

---*/

var s = new Set();

assert.sameValue(s.add(1), s, "`s.add(1)` returns `s`");

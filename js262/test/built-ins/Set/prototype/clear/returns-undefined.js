

/*---
esid: sec-set.prototype.clear
description: >
    Set.prototype.clear ( )

    ...
    6. Return undefined.

---*/

var s = new Set();

assert.sameValue(s.clear(), undefined, "`s.clear()` returns `undefined`");

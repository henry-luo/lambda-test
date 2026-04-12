

/*---
esid: sec-set.prototype.has
description: >
    Set.prototype.has ( value )

    ...
    6. Return false.

features: [Symbol]
---*/

var s = new Set();

assert.sameValue(s.has(Symbol()), false, "`s.has(Symbol())` returns `false`");

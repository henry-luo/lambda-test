

/*---
es5id: 15.5.4.20-4-42
description: >
    String.prototype.trim handles whitepace and lineterminators
    (ab\uFEFFc)
---*/

assert.sameValue("ab\uFEFFc".trim(), "ab\uFEFFc", '"ab\uFEFFc".trim()');

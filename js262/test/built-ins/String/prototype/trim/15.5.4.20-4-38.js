

/*---
es5id: 15.5.4.20-4-38
description: >
    String.prototype.trim handles whitepace and lineterminators
    (ab\u0020c)
---*/

assert.sameValue("ab\u0020c".trim(), "ab\u0020c", '"ab\u0020c".trim()');

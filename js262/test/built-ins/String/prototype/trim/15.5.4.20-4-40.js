

/*---
es5id: 15.5.4.20-4-40
description: >
    String.prototype.trim handles whitepace and lineterminators
    (ab\u00A0c)
---*/

assert.sameValue("ab\u00A0c".trim(), "ab\u00A0c", '"ab\u00A0c".trim()');



/*---
es5id: 15.5.4.20-4-8
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u00A0abc)
---*/

assert.sameValue("\u00A0abc".trim(), "abc", '"\u00A0abc".trim()');

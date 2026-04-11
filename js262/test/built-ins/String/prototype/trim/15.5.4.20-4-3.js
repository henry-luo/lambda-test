

/*---
es5id: 15.5.4.20-4-3
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u0009abc)
---*/

assert.sameValue("\u0009abc".trim(), "abc", '"\u0009abc".trim()');



/*---
es5id: 15.5.4.20-4-46
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u2029abc)
---*/

assert.sameValue("\u2029abc".trim(), "abc", '"\u2029abc".trim()');



/*---
es5id: 15.5.4.20-4-6
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u0020abc)
---*/

assert.sameValue("\u0020abc".trim(), "abc", '"\u0020abc".trim()');

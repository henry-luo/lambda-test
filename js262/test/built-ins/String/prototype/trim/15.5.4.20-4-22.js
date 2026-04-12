

/*---
es5id: 15.5.4.20-4-22
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u0020abc\u0020)
---*/

assert.sameValue("\u0020abc\u0020".trim(), "abc", '"\u0020abc\u0020".trim()');

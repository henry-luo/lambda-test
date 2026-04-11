

/*---
es5id: 15.5.4.20-4-54
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u2029abc\u2029)
---*/

assert.sameValue("\u2029abc\u2029".trim(), "abc", '"\u2029abc\u2029".trim()');

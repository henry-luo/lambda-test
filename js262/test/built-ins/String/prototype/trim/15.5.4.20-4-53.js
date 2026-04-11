

/*---
es5id: 15.5.4.20-4-53
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u2028abc\u2028)
---*/

assert.sameValue("\u2028abc\u2028".trim(), "abc", '"\u2028abc\u2028".trim()');

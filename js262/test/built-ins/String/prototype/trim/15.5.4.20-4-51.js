

/*---
es5id: 15.5.4.20-4-51
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u000Aabc\u000A)
---*/

assert.sameValue("\u000Aabc\u000A".trim(), "abc", '"\u000Aabc\u000A".trim()');

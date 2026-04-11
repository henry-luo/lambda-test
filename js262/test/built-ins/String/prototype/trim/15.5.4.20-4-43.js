

/*---
es5id: 15.5.4.20-4-43
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u000Aabc)
---*/

assert.sameValue("\u000Aabc".trim(), "abc", '"\u000Aabc".trim()');

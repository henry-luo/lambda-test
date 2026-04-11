

/*---
es5id: 15.5.4.20-4-28
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u000B\u000B)
---*/

assert.sameValue("\u000B\u000B".trim(), "", '"\u000B\u000B".trim()');

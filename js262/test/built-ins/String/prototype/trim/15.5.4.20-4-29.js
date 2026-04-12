

/*---
es5id: 15.5.4.20-4-29
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u000C\u000C)
---*/

assert.sameValue("\u000C\u000C".trim(), "", '"\u000C\u000C".trim()');

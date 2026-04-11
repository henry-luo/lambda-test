

/*---
es5id: 15.5.4.20-4-21
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u000Cabc\u000C)
---*/

assert.sameValue("\u000Cabc\u000C".trim(), "abc", '"\u000Cabc\u000C".trim()');

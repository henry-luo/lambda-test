

/*---
es5id: 15.5.4.20-4-5
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u000Cabc)
---*/

assert.sameValue("\u000Cabc".trim(), "abc", '"\u000Cabc".trim()');



/*---
es5id: 15.5.4.20-4-44
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u000Dabc)
---*/

assert.sameValue("\u000Dabc".trim(), "abc", '"\u000Dabc".trim()');

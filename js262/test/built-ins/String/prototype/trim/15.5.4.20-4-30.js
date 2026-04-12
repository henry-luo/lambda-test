

/*---
es5id: 15.5.4.20-4-30
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u0020\u0020)
---*/

assert.sameValue("\u0020\u0020".trim(), "", '"\u0020\u0020".trim()');

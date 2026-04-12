

/*---
es5id: 15.5.4.20-4-58
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u2029\u2029)
---*/

assert.sameValue("\u2029\u2029".trim(), "", '"\u2029\u2029".trim()');

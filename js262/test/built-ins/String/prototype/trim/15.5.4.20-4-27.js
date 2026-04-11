

/*---
es5id: 15.5.4.20-4-27
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u0009\u0009)
---*/

assert.sameValue("\u0009\u0009".trim(), "", '"\u0009\u0009".trim()');

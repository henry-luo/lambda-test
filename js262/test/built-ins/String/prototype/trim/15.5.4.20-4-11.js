

/*---
es5id: 15.5.4.20-4-11
description: >
    String.prototype.trim handles whitepace and lineterminators
    (abc\u0009)
---*/

assert.sameValue("abc\u0009".trim(), "abc", '"abc\u0009".trim()');

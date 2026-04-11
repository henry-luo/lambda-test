

/*---
es5id: 15.5.4.20-4-14
description: >
    String.prototype.trim handles whitepace and lineterminators
    (abc\u0020)
---*/

assert.sameValue("abc\u0020".trim(), "abc", '"abc\u0020".trim()');



/*---
es5id: 15.5.4.20-4-13
description: >
    String.prototype.trim handles whitepace and lineterminators
    (abc\u000C)
---*/

assert.sameValue("abc\u000C".trim(), "abc", '"abc\u000C".trim()');

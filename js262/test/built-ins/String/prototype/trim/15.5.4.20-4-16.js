

/*---
es5id: 15.5.4.20-4-16
description: >
    String.prototype.trim handles whitepace and lineterminators
    (abc\u00A0)
---*/

assert.sameValue("abc\u00A0".trim(), "abc", '"abc\u00A0".trim()');

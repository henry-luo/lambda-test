

/*---
es5id: 15.5.4.20-4-18
description: >
    String.prototype.trim handles whitepace and lineterminators
    (abc\uFEFF)
---*/

assert.sameValue("abc\uFEFF".trim(), "abc", '"abc\uFEFF".trim()');

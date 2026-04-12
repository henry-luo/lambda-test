

/*---
es5id: 15.5.4.20-4-10
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\uFEFFabc)
---*/

assert.sameValue("\uFEFFabc".trim(), "abc", '"\uFEFFabc".trim()');

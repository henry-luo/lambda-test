

/*---
es5id: 15.5.4.20-4-34
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\uFEFF\uFEFF)
---*/

assert.sameValue("\uFEFF\uFEFF".trim(), "", '"\uFEFF\uFEFF".trim()');

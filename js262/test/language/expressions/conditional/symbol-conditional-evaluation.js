

/*---
es6id: 12.12.3
description: >
    Conditional Symbol evaluation
features: [Symbol]
---*/
var sym = Symbol();

assert.sameValue(sym ? 1 : 2, 1, "`sym ? 1 : 2` is `1`");
assert.sameValue(!sym ? 1 : 2, 2, "`!sym ? 1 : 2` is `2`");

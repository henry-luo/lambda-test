

/*---
es6id: 12.12.3
description: >
    "Logical OR" Symbol evaluation
features: [Symbol]
---*/
var sym = Symbol();

assert.sameValue(!sym || true, true, "`!sym || true` is `true`");
assert.sameValue(sym || false, sym, "`sym || false` is `sym`");

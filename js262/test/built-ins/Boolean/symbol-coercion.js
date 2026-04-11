

/*---
esid: sec-toboolean
description: >
    Boolean coercion operations on Symbols
features: [Symbol]
---*/
var sym = Symbol();

assert.sameValue(Boolean(sym).valueOf(), true, "`Boolean(sym).valueOf()` returns `true`");

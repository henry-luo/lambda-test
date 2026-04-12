

/*---
es6id: 14.2
description: >
    Arrow functions are like functions, except they throw when using the
    "new" operator on them.
---*/

assert.sameValue(typeof (() => {}), "function");
assert.sameValue(Object.getPrototypeOf(() => {}), Function.prototype);
assert.sameValue("prototype" in (() => {}), false);

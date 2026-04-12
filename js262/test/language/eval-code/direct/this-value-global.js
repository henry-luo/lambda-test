

/*---
description: >
    Direct eval code has the same `this` binding as the calling context (global
    scope)
esid: sec-performeval
---*/

assert.sameValue(eval('this;'), this);

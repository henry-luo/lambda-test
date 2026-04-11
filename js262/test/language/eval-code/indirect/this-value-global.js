

/*---
description: >
    Direct eval code has the same `this` binding as the calling context (global
    scope)
esid: sec-performeval
---*/

assert.sameValue((0,eval)('this;'), this);

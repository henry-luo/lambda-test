

/*---
info: |
    15.3.4.5 step 2 specifies that a TypeError must be thrown if the Target
    is not callable.
es5id: 15.3.4.5-2-3
description: Function.prototype.bind allows Target to be a constructor (Number)
---*/

var bnc = Number.bind(null);
var n = bnc(42);

assert.sameValue(n, 42, 'n');

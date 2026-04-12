

/*---
es5id: 10.4.3-1-12-s
description: >
    Strict Mode - checking 'this' (Anonymous FunctionExpression
    includes strict directive prologue)
flags: [noStrict]
---*/

assert.sameValue((function () {
    "use strict";
    return typeof this;
})(), "undefined");

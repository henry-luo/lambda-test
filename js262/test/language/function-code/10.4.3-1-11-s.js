

/*---
es5id: 10.4.3-1-11-s
description: >
    Strict Mode - checking 'this' (Anonymous FunctionExpression
    defined within strict mode)
flags: [onlyStrict]
---*/

assert.sameValue((function () {
    return typeof this;
})(), "undefined");

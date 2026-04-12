

/*---
es5id: 10.4.3-1-26-s
description: >
    Strict Mode - checking 'this' (New'ed object from Anonymous
    FunctionExpression includes strict directive prologue)
flags: [noStrict]
---*/

var obj = new (function () {
    "use strict";
    return this;
});

assert.notSameValue(obj, this, 'obj');
assert.notSameValue((typeof obj), "undefined", '(typeof obj)');

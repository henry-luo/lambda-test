

/*---
es5id: 10.4.3-1-24-s
description: >
    Strict Mode - checking 'this' (New'ed object from
    FunctionExpression includes strict directive prologue)
flags: [noStrict]
---*/

var f = function () {
    "use strict";
    return this;
}

assert.notSameValue((new f()), this, '(new f())');
assert.notSameValue(typeof (new f()), "undefined", 'typeof (new f())');

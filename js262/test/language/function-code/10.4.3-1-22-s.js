

/*---
es5id: 10.4.3-1-22-s
description: >
    Strict Mode - checking 'this' (New'ed object from
    FunctionDeclaration includes strict directive prologue)
flags: [noStrict]
---*/

function f() {
    "use strict";
    return this;
}

assert.notSameValue((new f()), this, '(new f())');
assert.notSameValue(typeof (new f()), "undefined", 'typeof (new f())');

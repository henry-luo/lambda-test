

/*---
es5id: 10.4.3-1-8-s
description: >
    Strict Mode - checking 'this' (FunctionDeclaration includes strict
    directive prologue)
flags: [noStrict]
---*/

function f() {
    "use strict";
    return typeof this;
}

assert.sameValue(f(), "undefined", 'f()');

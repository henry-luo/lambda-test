

/*---
es5id: 10.4.3-1-39-s
description: >
    Strict Mode - checking 'this' (FunctionDeclaration defined within
    a FunctionExpression with a strict directive prologue)
flags: [noStrict]
---*/

var f1 = function () {
    "use strict";
    function f() {
        return typeof this;
    }
    return (f()==="undefined") && ((typeof this)==="undefined");
}

assert(f1(), 'f1() !== true');

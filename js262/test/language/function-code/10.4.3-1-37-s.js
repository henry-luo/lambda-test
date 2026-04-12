

/*---
es5id: 10.4.3-1-37-s
description: >
    Strict Mode - checking 'this' (FunctionExpression defined within a
    FunctionDeclaration with a strict directive prologue)
flags: [noStrict]
---*/

function f1() {
    "use strict";
    var f = function () {
        return typeof this;
    }
    return (f()==="undefined") && ((typeof this)==="undefined");
}

assert(f1(), 'f1() !== true');

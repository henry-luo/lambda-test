

/*---
es5id: 10.4.3-1-45-s
description: >
    Strict Mode - checking 'this' (FunctionDeclaration with a strict
    directive prologue defined within a FunctionDeclaration)
flags: [noStrict]
---*/

var global = this;

function f1() {
    function f() {
        "use strict";
        return typeof this;
    }
    return (f()==="undefined") && (this===global);
}

assert(f1(), 'f1() !== true');

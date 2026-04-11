

/*---
es5id: 10.4.3-1-47-s
description: >
    Strict Mode - checking 'this' (Anonymous FunctionExpression with a
    strict directive prologue defined within a FunctionDeclaration)
flags: [noStrict]
---*/

var global = this;

function f1() {
    return ((function () {
        "use strict";
        return typeof this;
    })()==="undefined") && (this===global);
}

assert(f1(), 'f1() !== true');

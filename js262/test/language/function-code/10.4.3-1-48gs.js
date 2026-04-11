

/*---
es5id: 10.4.3-1-48gs
description: >
    Strict - checking 'this' from a global scope (FunctionDeclaration
    with a strict directive prologue defined within a
    FunctionExpression)
flags: [noStrict]
---*/

var global = this;

var f1 = function () {
    function f() {
        "use strict";
        return typeof this;
    }
    return (f()==="undefined") && (this===global);
}
if (! f1()) {
    throw "'this' had incorrect value!";
}

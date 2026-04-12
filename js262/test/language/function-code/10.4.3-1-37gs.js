

/*---
es5id: 10.4.3-1-37gs
description: >
    Strict - checking 'this' from a global scope (FunctionExpression
    defined within a FunctionDeclaration with a strict directive
    prologue)
flags: [noStrict]
---*/

function f1() {
    "use strict";
    var f = function () {
        return typeof this;
    }
    return (f()==="undefined") && ((typeof this)==="undefined");
}
if (! f1()) {
    throw "'this' had incorrect value!";
}

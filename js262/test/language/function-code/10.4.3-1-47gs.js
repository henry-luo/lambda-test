

/*---
es5id: 10.4.3-1-47gs
description: >
    Strict - checking 'this' from a global scope (Anonymous
    FunctionExpression with a strict directive prologue defined within
    a FunctionDeclaration)
flags: [noStrict]
---*/

var global = this;

function f1() {
    return ((function () {
        "use strict";
        return typeof this;
    })()==="undefined") && (this===global);
}
if (! f1()) {
    throw "'this' had incorrect value!";
}

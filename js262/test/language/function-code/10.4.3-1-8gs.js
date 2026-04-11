

/*---
es5id: 10.4.3-1-8gs
description: >
    Strict - checking 'this' from a global scope (FunctionDeclaration
    includes strict directive prologue)
flags: [noStrict]
---*/

function f() {
    "use strict";
    return typeof this;
}
if (f() !== "undefined") {
    throw "'this' had incorrect value!";
}

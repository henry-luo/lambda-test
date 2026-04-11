

/*---
es5id: 10.4.3-1-7gs
description: >
    Strict - checking 'this' from a global scope (FunctionDeclaration
    defined within strict mode)
flags: [onlyStrict]
---*/

function f() {
    return typeof this;
}
if (f() !== "undefined") {
    throw "'this' had incorrect value!";
}

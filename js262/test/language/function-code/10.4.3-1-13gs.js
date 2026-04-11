

/*---
es5id: 10.4.3-1-13gs
description: >
    Strict - checking 'this' from a global scope (Function constructor
    defined within strict mode)
flags: [onlyStrict]
---*/

var f = Function("return typeof this;");
if (f() === "undefined") {
    throw "'this' had incorrect value!";
}

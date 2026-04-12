

/*---
es5id: 10.4.3-1-14gs
description: >
    Strict - checking 'this' from a global scope (Function constructor
    includes strict directive prologue)
flags: [noStrict]
---*/

var f = Function("\"use strict\";\nreturn typeof this;");
if (f() !== "undefined") {
    throw "'this' had incorrect value!";
}



/*---
es5id: 10.4.3-1-10gs
description: >
    Strict - checking 'this' from a global scope (FunctionExpression
    includes strict directive prologue)
flags: [noStrict]
---*/

var f = function () {
    "use strict";
    return typeof this;
}
if (f() !== "undefined") {
    throw "'this' had incorrect value!";
}

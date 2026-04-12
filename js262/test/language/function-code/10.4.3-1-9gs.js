

/*---
es5id: 10.4.3-1-9gs
description: >
    Strict - checking 'this' from a global scope (FunctionExpression
    defined within strict mode)
flags: [onlyStrict]
---*/

var f = function () {
    return typeof this;
}
if (f() !== "undefined") {
    throw "'this' had incorrect value!";
}

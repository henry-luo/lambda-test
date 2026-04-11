

/*---
es5id: 10.4.3-1-11gs
description: >
    Strict - checking 'this' from a global scope (Anonymous
    FunctionExpression defined within strict mode)
flags: [onlyStrict]
---*/

if ((function () {
    return typeof this;
})() !== "undefined") {
    throw "'this' had incorrect value!";
}

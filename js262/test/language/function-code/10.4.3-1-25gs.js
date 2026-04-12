

/*---
es5id: 10.4.3-1-25gs
description: >
    Strict - checking 'this' from a global scope (New'ed object from
    Anonymous FunctionExpression defined within strict mode)
flags: [onlyStrict]
---*/

var obj = new (function () {
    return this;
});
if ((obj === this) || (typeof obj === "undefined")) {
    throw "'this' had incorrect value!";
}

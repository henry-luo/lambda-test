

/*---
es5id: 10.4.3-1-23gs
description: >
    Strict - checking 'this' from a global scope (New'ed object from
    FunctionExpression defined within strict mode)
flags: [onlyStrict]
---*/

var f = function () {
    return this;
}
if (((new f()) === this) || (typeof (new f()) === "undefined")) {
    throw "'this' had incorrect value!";
}

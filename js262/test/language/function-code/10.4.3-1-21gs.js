

/*---
es5id: 10.4.3-1-21gs
description: >
    Strict - checking 'this' from a global scope (New'ed object from
    FunctionDeclaration defined within strict mode)
flags: [onlyStrict]
---*/

function f() {
    return this;
}
if (((new f()) === this) || (typeof (new f()) === "undefined")) {
    throw "'this' had incorrect value!";
}

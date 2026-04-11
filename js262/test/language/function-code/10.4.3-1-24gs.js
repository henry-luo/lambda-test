

/*---
es5id: 10.4.3-1-24gs
description: >
    Strict - checking 'this' from a global scope (New'ed object from
    FunctionExpression includes strict directive prologue)
flags: [noStrict]
---*/

var f = function () {
    "use strict";
    return this;
}
if (((new f()) === this) || (typeof (new f()) === "undefined")) {
    throw "'this' had incorrect value!";
}

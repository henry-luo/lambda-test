

/*---
es5id: 10.4.3-1-26gs
description: >
    Strict - checking 'this' from a global scope (New'ed object from
    Anonymous FunctionExpression includes strict directive prologue)
flags: [noStrict]
---*/

var obj = new (function () {
    "use strict";
    return this;
});
if ((obj === this) || (typeof obj === "undefined")) {
    throw "'this' had incorrect value!";
}



/*---
es5id: 10.4.3-1-44gs
description: >
    Strict - checking 'this' from a global scope (Anonymous
    FunctionExpression defined within an Anonymous FunctionExpression
    with a strict directive prologue)
flags: [noStrict]
---*/

if (! ((function () {
    "use strict";
    return ((function () {
        return typeof this;
    })()==="undefined") && ((typeof this)==="undefined");
})())) {
    throw "'this' had incorrect value!";
}

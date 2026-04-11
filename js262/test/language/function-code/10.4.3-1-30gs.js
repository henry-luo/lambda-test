

/*---
es5id: 10.4.3-1-30gs
description: >
    Strict - checking 'this' from a global scope (FunctionDeclaration
    defined within a FunctionExpression inside strict mode)
flags: [onlyStrict]
---*/

var f1 = function () {
    function f() {
        return typeof this;
    }
    return (f()==="undefined") && ((typeof this)==="undefined");
}
if (! f1()) {
    throw "'this' had incorrect value!";
}

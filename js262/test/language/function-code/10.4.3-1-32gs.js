

/*---
es5id: 10.4.3-1-32gs
description: >
    Strict - checking 'this' from a global scope (Anonymous
    FunctionExpression defined within a FunctionExpression inside
    strict mode)
flags: [onlyStrict]
---*/

var f1 = function () {
    return ((function () {
        return typeof this;
    })()==="undefined") && ((typeof this)==="undefined");
}
if (! f1()) {
    throw "'this' had incorrect value!";
}

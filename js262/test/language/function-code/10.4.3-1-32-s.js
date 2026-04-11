

/*---
es5id: 10.4.3-1-32-s
description: >
    Strict Mode - checking 'this' (Anonymous FunctionExpression
    defined within a FunctionExpression inside strict mode)
flags: [onlyStrict]
---*/

var f1 = function () {
    return ((function () {
        return typeof this;
    })()==="undefined") && ((typeof this)==="undefined");
}

assert(f1(), 'f1() !== true');

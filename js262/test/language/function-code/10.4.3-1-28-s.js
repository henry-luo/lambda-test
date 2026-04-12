

/*---
es5id: 10.4.3-1-28-s
description: >
    Strict Mode - checking 'this' (FunctionExpression defined within a
    FunctionDeclaration inside strict mode)
flags: [onlyStrict]
---*/

function f1() {
    var f = function () {
        return typeof this;
    }
    return (f()==="undefined") && ((typeof this)==="undefined");
}

assert(f1(), 'f1() !== true');

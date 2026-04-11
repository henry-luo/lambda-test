

/*---
es5id: 10.4.3-1-50-s
description: >
    Strict Mode - checking 'this' (Anonymous FunctionExpression with a
    strict directive prologue defined within a FunctionExpression)
flags: [noStrict]
---*/

var global = this;

var f1 = function () {
    return ((function () {
        "use strict";
        return typeof this;
    })()==="undefined") && (this===global);
}

assert(f1(), 'f1() !== true');

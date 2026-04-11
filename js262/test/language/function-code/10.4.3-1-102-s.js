

/*---
es5id: 10.4.3-1-102-s
description: >
    Strict Mode - checking 'this' (strict anonymous function passed as
    arg to String.prototype.replace)
---*/

var x = 3;

assert.sameValue("ab".replace("b", (function () {
    "use strict";
    return function () {
        x = this;
        return "a";
    }
})()), "aa");
assert.sameValue(x, undefined, 'x');

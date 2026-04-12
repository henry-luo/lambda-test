

/*---
es5id: 10.4.3-1-100-s
description: >
    Strict Mode - checking 'this' (strict function passed as arg to
    String.prototype.replace)
---*/

var x = 3;

function f() {
    "use strict";
    x = this;
    return "a";
}

assert.sameValue("ab".replace("b", f), "aa", '"ab".replace("b", f)');
assert.sameValue(x, undefined, 'x');

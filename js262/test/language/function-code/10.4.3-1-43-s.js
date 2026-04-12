

/*---
es5id: 10.4.3-1-43-s
description: >
    Strict Mode - checking 'this' (FunctionExpression defined within
    an Anonymous FunctionExpression with a strict directive prologue)
flags: [noStrict]
---*/

(function () {
    "use strict";
    var f = function () {
        return typeof this;
    }
    assert.sameValue(f(), "undefined", 'f()');
    assert.sameValue(typeof this, "undefined", 'typeof this');
})();

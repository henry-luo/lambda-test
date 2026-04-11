

/*---
es5id: 10.4.3-1-44-s
description: >
    Strict Mode - checking 'this' (Anonymous FunctionExpression
    defined within an Anonymous FunctionExpression with a strict
    directive prologue)
flags: [noStrict]
---*/

(function () {
    "use strict";
    assert.sameValue((function () {
        return typeof this;
    })(), "undefined");
    assert.sameValue(typeof this, "undefined", 'typeof this');
})();

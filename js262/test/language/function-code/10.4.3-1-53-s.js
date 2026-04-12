

/*---
es5id: 10.4.3-1-53-s
description: >
    Strict Mode - checking 'this' (Anonymous FunctionExpression with a
    strict directive prologue defined within an Anonymous
    FunctionExpression)
flags: [noStrict]
---*/

var global = this;

(function () {
    assert.sameValue((function () {
        "use strict";
        return typeof this;
    })(), "undefined");
    assert.sameValue(this, global, 'this');
})();

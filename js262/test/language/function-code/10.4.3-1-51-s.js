

/*---
es5id: 10.4.3-1-51-s
description: >
    Strict Mode - checking 'this' (FunctionDeclaration with a strict
    directive prologue defined within an Anonymous FunctionExpression)
flags: [noStrict]
---*/

var global = this;

(function () {
    function f() {
        "use strict";
        return typeof this;
    }
    assert.sameValue(f(), "undefined", 'f()');
    assert.sameValue(this, global, 'this');
})();

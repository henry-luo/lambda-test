

/*---
es5id: 10.4.3-1-34-s
description: >
    Strict Mode - checking 'this' (FunctionExpression defined within
    an Anonymous FunctionExpression inside strict mode)
flags: [onlyStrict]
---*/

(function () {
    var f = function () {
        return typeof this;
    }
    assert.sameValue(f(), "undefined", 'f()');
    assert.sameValue(typeof this, "undefined", 'typeof this');
})();

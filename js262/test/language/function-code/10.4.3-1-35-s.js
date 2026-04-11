

/*---
es5id: 10.4.3-1-35-s
description: >
    Strict Mode - checking 'this' (Anonymous FunctionExpression
    defined within an Anonymous FunctionExpression inside strict mode)
flags: [onlyStrict]
---*/

(function () {
    assert.sameValue((function () {
        return typeof this;
    })(), "undefined");
    assert.sameValue(typeof this, "undefined", 'typeof this');
})();

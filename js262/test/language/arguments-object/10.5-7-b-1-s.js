

/*---
es5id: 10.5-7-b-1-s
description: Strict Mode - arguments object is immutable in eval'ed functions
flags: [onlyStrict]
---*/

assert.throws(SyntaxError, function() {
    eval("(function _10_5_7_b_1_fun() { arguments = 10;} ());");
});



/*---
es5id: 10.5-1-s
description: Strict Mode - arguments object is immutable
flags: [onlyStrict]
---*/

assert.throws(SyntaxError, function() {
    (function fun() {
        eval("arguments = 10");
    })(30);
});

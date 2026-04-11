

/*---
es5id: 10.1.1-30-s
description: >
    Strict Mode - Function code of built-in Function constructor
    contains Use Strict Directive which appears at the start of the
    block
flags: [noStrict]
---*/


assert.throws(SyntaxError, function() {
            var funObj = new Function("a", "'use strict'; eval('public = 1;');");
            funObj();
});

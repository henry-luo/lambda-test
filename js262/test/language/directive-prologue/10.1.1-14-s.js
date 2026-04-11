

/*---
es5id: 10.1.1-14-s
description: >
    Strict Mode - The call to eval function is contained in a Strict
    Mode block
flags: [noStrict]
---*/

assert.throws(SyntaxError, function() {
        'use strict';

            eval("var public = 1;");
});

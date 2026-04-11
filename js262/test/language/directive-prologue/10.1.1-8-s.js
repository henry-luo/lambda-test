

/*---
es5id: 10.1.1-8-s
description: >
    Strict Mode - Use Strict Directive Prologue is ''use strict';'
    which appears twice in the directive prologue
flags: [noStrict]
---*/

assert.throws(SyntaxError, function() {
        "use strict";
        "use strict";

            eval("var public = 1;");
});

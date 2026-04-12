

/*---
esid: use-strict-directive
es5id: 10.1.1-23-s
description: >
    Strict Mode - Function code of a FunctionExpression contains Use
    Strict Directive which appears in the middle of the block
flags: [noStrict]
---*/

        (function () {
            test262unresolvable = null;
            assert.sameValue(test262unresolvable, null);
            "use strict";
        }) ();

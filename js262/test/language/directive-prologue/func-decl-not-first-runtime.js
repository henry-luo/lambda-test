

/*---
esid: use-strict-directive
es5id: 10.1.1-20-s
description: >
    Strict Mode - Function code of a FunctionDeclaration contains Use
    Strict Directive which appears in the middle of the block
flags: [noStrict]
---*/

        function fun() {
            test262unresolvable = null;
            "use strict";
            assert.sameValue(test262unresolvable, null);
        }
        fun();

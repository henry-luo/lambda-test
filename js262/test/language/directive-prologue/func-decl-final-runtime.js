

/*---
esid: use-strict-directive
es5id: 10.1.1-21-s
description: >
    Strict Mode - Function code of a FunctionDeclaration contains Use
    Strict Directive which appears at the end of the block
flags: [noStrict]
---*/
        function fun() {
            test262unresolvable = null;
            assert.sameValue(test262unresolvable, null);
            "use strict";
        }
        fun();

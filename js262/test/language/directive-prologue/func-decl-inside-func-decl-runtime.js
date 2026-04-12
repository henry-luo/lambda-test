

/*---
esid: use-strict-directive
es5id: 10.1.1-15-s
description: >
    Strict Mode - Function code that is part of a FunctionDeclaration
    is strict function code if FunctionDeclaration is contained in use
    strict
flags: [noStrict]
---*/

function testcase() {
        "use strict";
        function fun() {
            test262unresolvable = null;
        }

        assert.throws(ReferenceError, function() {
            fun();
        });
    }
testcase();

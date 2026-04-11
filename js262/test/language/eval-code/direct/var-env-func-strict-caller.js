

/*---
es5id: 10.4.2-2-s
description: >
    Strict Mode - Strict mode eval code cannot instantiate functions
    in the variable environment of the caller to eval
flags: [onlyStrict]
---*/

function testcase() {
        eval("function fun(x){ return x }");
        assert.sameValue(typeof (fun), "undefined");
    }
testcase();

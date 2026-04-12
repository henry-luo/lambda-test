

/*---
esid: use-strict-directive
es5id: 10.1.1-22-s
description: >
    Strict Mode - Function code of a FunctionExpression contains Use
    Strict Directive which appears at the start of the block
flags: [noStrict]
---*/

assert.throws(ReferenceError, function () {
            "use strict";

            test262unresolvable = null;
});

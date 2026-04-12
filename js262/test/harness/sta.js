

/*---
description: >
    Including sta.js will expose three functions:

        Test262Error
        Test262Error.thrower
        $DONOTEVALUATE
---*/

assert(typeof Test262Error === "function");
assert(typeof Test262Error.prototype.toString === "function");
assert(typeof Test262Error.thrower === "function");
assert(typeof $DONOTEVALUATE === "function");



/*---
description: >
    Including tcoHelper.js will expose:

        var $MAX_ITERATIONS = 100000;

    This defines the number of consecutive recursive function calls that must be
    made in order to prove that stack frames are properly destroyed according to
    ES2015 tail call optimization semantics.

includes: [tcoHelper.js]
---*/


assert.sameValue($MAX_ITERATIONS, 100000);

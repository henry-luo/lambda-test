

/*---
es5id: 13.2-28-s
description: >
    StrictMode - enumerating over a function object looking for
    'arguments' fails inside the function
flags: [noStrict]
---*/

function foo() {
    "use strict";
    for (var tempIndex in this) {
        assert.notSameValue(tempIndex, "arguments", 'tempIndex');
    }
}
foo.call(foo);

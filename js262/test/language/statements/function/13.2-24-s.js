

/*---
es5id: 13.2-24-s
description: >
    StrictMode - enumerating over a function object looking for
    'caller' fails inside the function
flags: [noStrict]
---*/

function foo () {
    "use strict";
    for (var tempIndex in this) {
        assert.notSameValue(tempIndex, "caller", 'tempIndex');
    }
}

foo.call(foo);

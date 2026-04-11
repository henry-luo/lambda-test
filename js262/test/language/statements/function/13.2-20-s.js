

/*---
es5id: 13.2-20-s
description: >
    StrictMode - enumerating over a function object looking for
    'arguments' fails inside the function
flags: [noStrict]
---*/

var foo = Function("'use strict'; for (var tempIndex in this) {assert.notSameValue(tempIndex, 'arguments', 'tempIndex');}");
foo.call(foo);

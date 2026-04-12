

/*---
es5id: 13.2-16-s
description: >
    StrictMode - enumerating over a function object looking for
    'arguments' fails inside the function
---*/

var foo = new Function("'use strict'; for (var tempIndex in this) {assert.notSameValue(tempIndex, 'arguments', 'tempIndex');}");
foo.call(foo);

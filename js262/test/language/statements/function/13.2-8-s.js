

/*---
es5id: 13.2-8-s
description: >
    StrictMode - enumerating over a function object looking for
    'caller' fails inside the function
flags: [noStrict]
---*/

var foo = new Function("'use strict'; for (var tempIndex in this) {assert.notSameValue(tempIndex, 'caller', 'tempIndex');}");
foo.call(foo);

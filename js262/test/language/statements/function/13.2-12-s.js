

/*---
es5id: 13.2-12-s
description: >
    StrictMode - enumerating over a function object looking for
    'caller' fails inside the function
---*/

var foo = Function("'use strict'; for (var tempIndex in this) {assert.notSameValue(tempIndex, 'caller', 'tempIndex');}");
foo.call(foo);

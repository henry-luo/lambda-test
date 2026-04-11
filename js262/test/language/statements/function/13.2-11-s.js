

/*---
es5id: 13.2-11-s
description: >
    StrictMode - enumerating over a function object looking for
    'caller' fails outside of the function
---*/

var foo = Function("'use strict';");

for (var tempIndex in foo) {
    assert.notSameValue(tempIndex, "caller", 'tempIndex');
}

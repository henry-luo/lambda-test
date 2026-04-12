

/*---
es5id: 13.2-27-s
description: >
    StrictMode - enumerating over a function object looking for
    'arguments' fails outside of the function
flags: [noStrict]
---*/

function foo () {"use strict";}

for (var tempIndex in foo) {
    assert.notSameValue(tempIndex, "arguments", 'tempIndex');
}

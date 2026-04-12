

/*---
es5id: 10.6-2gs
description: >
    Strict Mode - arguments.callee cannot be accessed in a strict
    function
flags: [onlyStrict]
---*/

function f_10_6_1_gs(){
    return arguments.callee;
}

assert.throws(TypeError, function() {
    f_10_6_1_gs();
});

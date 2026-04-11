

/*---
es5id: 11.13.1-4-6-s
description: >
    simple assignment throws TypeError if LeftHandSide is a readonly
    property in strict mode (Function.length)
flags: [onlyStrict]
---*/


assert.throws(TypeError, function() {
    Function.length = 42;
});

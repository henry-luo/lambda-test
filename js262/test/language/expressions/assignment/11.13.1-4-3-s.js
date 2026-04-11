

/*---
es5id: 11.13.1-4-3-s
description: >
    simple assignment throws TypeError if LeftHandSide is a readonly
    property in strict mode (Global.Infinity)
flags: [onlyStrict]
---*/

var global = this;
assert.throws(TypeError, function() {
      global.Infinity = 42;
});

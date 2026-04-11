

/*---
es5id: 10.4.2.1-1gs
description: >
    Strict Mode - eval code cannot instantiate variable in the
    variable environment of the calling context that invoked the eval
    if the code of the calling context is strict code
flags: [onlyStrict]
---*/

eval("var x = 7;");
assert.throws(ReferenceError, function() {
  x = 9;
});



/*---
description: >
    Functions declared as methods may not be used as constructors.
es6id: 14.3.8
---*/

var obj = { method() {} };
assert.throws(TypeError, function() {
  new obj.method();
});

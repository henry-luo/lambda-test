

/*---
info: |
    15.3.4.5 step 2 specifies that a TypeError must be thrown if the Target
    is not callable.
es5id: 15.3.4.5-2-2
description: >
    Function.prototype.bind throws TypeError if the Target is not
    callable (bind attached to object)
---*/


function foo() {}
var f = new foo();
f.bind = Function.prototype.bind;
assert.throws(TypeError, function() {
  f.bind();
});

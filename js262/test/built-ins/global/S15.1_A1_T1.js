

/*---
info: The global object does not have a [[Construct]] property
es5id: 15.1_A1_T1
description: >
    It is not possible to use the global object as a constructor  with
    the new operator
---*/

var global = this;

assert.throws(TypeError, function() {
  new global;
});

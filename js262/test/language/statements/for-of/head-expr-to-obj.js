

/*---
es6id: 13.6.4.12 S8.b
description: >
    The value of the expression in a for-of statement's head is subject to the
    semantics of the ToObject abstract operation.
---*/
var x;

assert.throws(TypeError, function() {
  for (x of null) {}
});

assert.throws(TypeError, function() {
  for (x of undefined) {}
});

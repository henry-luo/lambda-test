

/*---
es6id: 13.6.4.12 S8.b
description: >
    The value of the expression in a for-of statement's head must have an
    `@@iterator` method.
---*/
var x;

assert.throws(TypeError, function() {
  for (x of false) {}
});

assert.throws(TypeError, function() {
  for (x of 37) {}
});

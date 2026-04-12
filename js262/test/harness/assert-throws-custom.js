

/*---
description: >
    Functions that throw instances of the specified constructor function
    satisfy the assertion.
---*/

function MyError() {}

assert.throws(MyError, function() {
  throw new MyError();
});

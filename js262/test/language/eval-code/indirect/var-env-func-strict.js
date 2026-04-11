

/*---
esid: sec-performeval
es5id: 10.4.2.1-4-s
description: >
    Strict Mode - Strict mode eval code cannot instantiate functions
    in the variable environment of the caller to eval.
---*/

var typeofInside;

(function() {
  (0,eval)("'use strict'; function fun(){}");
  typeofInside = typeof fun;
}());

assert.sameValue(typeofInside, "undefined");
assert.sameValue(typeof fun, "undefined");

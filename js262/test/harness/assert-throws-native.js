

/*---
description: >
    Functions that throw instances of the specified native Error constructor
    satisfy the assertion.
---*/

assert.throws(Error, function() {
  throw new Error();
});

assert.throws(EvalError, function() {
  throw new EvalError();
});

assert.throws(RangeError, function() {
  throw new RangeError();
});

assert.throws(ReferenceError, function() {
  throw new ReferenceError();
});

assert.throws(SyntaxError, function() {
  throw new SyntaxError();
});

assert.throws(TypeError, function() {
  throw new TypeError();
});

assert.throws(URIError, function() {
  throw new URIError();
});

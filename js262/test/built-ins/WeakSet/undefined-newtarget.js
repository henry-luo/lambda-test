

/*---
esid: sec-weakset-iterable
description: >
  The WeakSet constructor is the %WeakSet% intrinsic object and the initial
  value of the WeakSet property of the global object.
info: |
  23.4.1.1 WeakSet ( [ iterable ] )

  1. If NewTarget is undefined, throw a TypeError exception.
---*/

assert.throws(TypeError, function() {
  WeakSet();
});

assert.throws(TypeError, function() {
  WeakSet([]);
});

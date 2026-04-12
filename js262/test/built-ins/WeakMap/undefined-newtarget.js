

/*---
esid: sec-weakmap-iterable
description: >
  Throws a TypeError if NewTarget is undefined.
info: |
  23.3.1.1 WeakMap ( [ iterable ] )

  1. If NewTarget is undefined, throw a TypeError exception.
---*/

assert.throws(TypeError, function() {
  WeakMap();
});

assert.throws(TypeError, function() {
  WeakMap([]);
});

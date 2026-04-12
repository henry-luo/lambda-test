

/*---
esid: sec-weakset-iterable
description: >
  If the iterable argument is undefined, return new Weakset object.
info: |
  23.4.1.1 WeakSet ( [ iterable ] )

  ...
  7. Else,
    d. Let iter be GetIterator(iterable).
    e. ReturnIfAbrupt(iter).
  ...
---*/

assert.throws(TypeError, function() {
  new WeakSet({});
});

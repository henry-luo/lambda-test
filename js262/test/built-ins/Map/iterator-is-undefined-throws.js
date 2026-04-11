

/*---
esid: sec-map-objects
description: >
  Throws a TypeError if the iterator of the iterable is undefined.
info: |
  Map ( [ iterable ] )
  ...
  9. Let iteratorRecord be ? GetIterator(iterable).
features: [Symbol.iterator]
---*/

var iterable  = { [Symbol.iterator]: undefined };

assert.throws(TypeError,
  function () {
    new Map(iterable);
});



/*---
esid: sec-iteratorprototype.map
description: >
  Iterator.prototype.map throws TypeError when its this value is a non-object
info: |
  %Iterator.prototype%.map ( mapper )

  2. If O is not an Object, throw a TypeError exception.

features: [iterator-helpers]
flags: []
---*/
assert.throws(TypeError, function () {
  Iterator.prototype.map.call(null, () => 0);
});

Object.defineProperty(Number.prototype, 'next', {
  get: function () {
    throw new Test262Error();
  },
});
assert.throws(TypeError, function () {
  Iterator.prototype.map.call(0, () => 0);
});

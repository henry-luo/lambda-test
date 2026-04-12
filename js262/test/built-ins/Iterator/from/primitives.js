

/*---
esid: sec-iterator.from
description: >
  Iterator.from throws on primitives (except Strings)
info: |
  Iterator.from ( O )

features: [iterator-helpers]
flags: []
---*/

assert.throws(TypeError, function () {
  Iterator.from(null);
});

assert.throws(TypeError, function () {
  Iterator.from(undefined);
});

assert.throws(TypeError, function () {
  Iterator.from(0);
});

assert.throws(TypeError, function () {
  Iterator.from(0n);
});

assert.throws(TypeError, function () {
  Iterator.from(true);
});

assert.throws(TypeError, function () {
  Iterator.from(Symbol());
});

Iterator.from('string');

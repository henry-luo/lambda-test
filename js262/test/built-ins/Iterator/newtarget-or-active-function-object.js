

/*---
esid: sec-iterator
description: >
  Iterator is not callable or constructable
info: |
  When the Iterator function is called, the following steps are taken:

  If NewTarget is undefined or the active function object, throw a TypeError exception.

features: [iterator-helpers]
---*/

assert.throws(TypeError, () => {
  Iterator();
});

assert.throws(TypeError, () => {
  new Iterator();
});

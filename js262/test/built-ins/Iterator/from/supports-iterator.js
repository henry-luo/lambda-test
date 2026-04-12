

/*---
esid: sec-iterator.from
description: >
  Iterator.from supports non-iterable iterators
info: |
  Iterator.from ( O )

includes: [compareArray.js]
features: [iterator-helpers]
flags: []
---*/

function* g() {
  yield 0;
  yield 1;
  yield 2;
  yield 3;
}

let n = g();
let iter = {
  next() {
    return n.next();
  },
};

assert.compareArray(Array.from(Iterator.from(iter)), [0, 1, 2, 3]);



/*---
esid: sec-iteratorprototype.reduce
description: >
  Iterator.prototype.reduce calls reducer once for each value yielded by the underlying iterator except the first when not passed an initial value
info: |
  %Iterator.prototype%.reduce ( reducer )

features: [iterator-helpers]
flags: []
---*/
function* g() {
  yield 'a';
}

let iter = g();

let assertionCount = 0;
let result = iter.reduce((memo, v, count) => {
  ++assertionCount;
  return v;
});

assert.sameValue(result, 'a');
assert.sameValue(assertionCount, 0);

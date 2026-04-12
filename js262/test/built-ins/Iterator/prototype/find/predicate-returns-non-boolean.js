

/*---
esid: sec-iteratorprototype.find
description: >
  Iterator.prototype.find coerces predicate return value to boolean
info: |
  %Iterator.prototype%.find ( predicate )

features: [iterator-helpers]
flags: []
---*/
function* g() {
  yield '';
  yield null;
  yield undefined;
  yield 0;
  yield 1;
  yield 2;
  yield 3;
}

let iter = g();

let predicateCalls = 0;
let result = iter.find(v => {
  ++predicateCalls;
  return v;
});

assert.sameValue(result, 1);
assert.sameValue(predicateCalls, 5);



/*---
esid: sec-iteratorprototype.find
description: >
  Iterator.prototype.find returns undefined when the predicate returns falsey for all iterated values
info: |
  %Iterator.prototype%.find ( predicate )

features: [iterator-helpers]
flags: []
---*/
function* g() {
  yield 0;
  yield 1;
  yield 2;
  yield 3;
}

let result = g().find(() => false);
assert.sameValue(result, undefined);

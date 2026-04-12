

/*---
esid: sec-iteratorprototype.filter
description: >
  Iterator.prototype.filter returns an empty iterator when the iterator has already been exhausted
info: |
  %Iterator.prototype%.filter ( predicate )

  3.b.i. Let next be ? IteratorStep(iterated).
  3.b.ii. If next is false, return undefined.

features: [iterator-helpers]
flags: []
---*/
let iterator = (function* () {})();

let { value, done } = iterator.next();
assert.sameValue(value, undefined);
assert.sameValue(done, true);

iterator = iterator.filter(() => true);
({ value, done } = iterator.next());
assert.sameValue(value, undefined);
assert.sameValue(done, true);

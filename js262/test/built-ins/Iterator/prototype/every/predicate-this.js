

/*---
esid: sec-iteratorprototype.every
description: >
  Iterator.prototype.every predicate this value is undefined
info: |
  %Iterator.prototype%.every ( predicate )

  4.d. Let result be Completion(Call(predicate, undefined, « value, 𝔽(counter) »)).

features: [iterator-helpers]
flags: []
---*/
function* g() {
  yield 0;
}

let iter = g();

let expectedThis = function () {
  return this;
}.call(undefined);

let assertionCount = 0;
let result = iter.every(function (v, count) {
  assert.sameValue(this, expectedThis);
  ++assertionCount;
  return true;
});

assert.sameValue(result, true);
assert.sameValue(assertionCount, 1);

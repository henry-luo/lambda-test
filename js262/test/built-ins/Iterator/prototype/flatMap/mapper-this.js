

/*---
esid: sec-iteratorprototype.flatMap
description: >
  Iterator.prototype.flatMap mapper this value is undefined
info: |
  %Iterator.prototype%.flatMap ( mapper )

  5.b.iv. Let mapped be Completion(Call(mapper, undefined, « value, 𝔽(counter) »)).

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
iter = iter.flatMap(function (v, count) {
  assert.sameValue(this, expectedThis);
  ++assertionCount;
  return [v];
});

iter.next();
assert.sameValue(assertionCount, 1);

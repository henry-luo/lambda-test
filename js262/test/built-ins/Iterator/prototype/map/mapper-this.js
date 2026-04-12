

/*---
esid: sec-iteratorprototype.map
description: >
  Iterator.prototype.map mapper this value is undefined
info: |
  %Iterator.prototype%.map ( mapper )

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
iter = iter.map(function (v, count) {
  assert.sameValue(this, expectedThis);
  ++assertionCount;
  return v;
});

iter.next();
assert.sameValue(assertionCount, 1);

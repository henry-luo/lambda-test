

/*---
esid: sec-iteratorprototype.forEach
description: >
  Iterator.prototype.forEach calls fn once for each yielded value, in order
info: |
  %Iterator.prototype%.forEach ( fn )

  6.d. Let result be Completion(Call(fn, undefined, « value, 𝔽(counter) »)).

includes: [compareArray.js]
features: [iterator-helpers]
flags: []
---*/
let effects = [];

function* g() {
  yield 'a';
  yield 'b';
  yield 'c';
}

g().forEach((value, count) => {
  effects.push(value, count);
});

assert.compareArray(effects, ['a', 0, 'b', 1, 'c', 2]);

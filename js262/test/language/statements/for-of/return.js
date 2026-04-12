

/*---
es6id: 13.6.4.13
description: >
    Control flow during body evaluation should honor `return` statements.
features: [generators]
---*/

function* values() {
  yield 1;
  throw new Test262Error('This code is unreachable (following `yield` statement).');
}
var iterator = values();
var i = 0;

var result = (function() {
  for (var x of iterator) {
    i++;
    return 34;

    throw new Test262Error('This code is unreachable (following `return` statement).');
  }

  throw new Test262Error('This code is unreachable (following `for..of` statement).');
})();

assert.sameValue(result, 34);
assert.sameValue(i, 1);

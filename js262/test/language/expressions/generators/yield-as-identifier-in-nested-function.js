

/*---
description: >
    `yield` is not a reserved keyword within normal function bodies declared
    within generator function bodies.
es6id: 12.1.1
flags: [noStrict]
features: [generators]
---*/

var result;
var g = function*() {
  function h() {
    yield = 1;
  }
};

result = g().next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);

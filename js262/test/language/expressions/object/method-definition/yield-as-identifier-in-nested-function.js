

/*---
description: >
    `yield` is not a reserved keyword within normal function bodies declared
    within generator function bodies.
features: [generators]
es6id: 12.1.1
flags: [noStrict]
---*/

var result;
var obj = {
  *g() {
    function h() {
      yield = 1;
    }
  }
};

result = obj.g().next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);



/*---
description: >
    `yield` may be used as a literal property name in an object literal
    within generator function bodies.
es6id: 12.1.1
features: [generators]
---*/

var result;
var g = function*() {
  ({ get yield() { return 1 } });
};

result = g().next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);

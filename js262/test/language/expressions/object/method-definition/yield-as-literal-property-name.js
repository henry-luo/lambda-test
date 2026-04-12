

/*---
description: >
    `yield` may be used as a literal property name in an object literal
    within generator function bodies.
features: [generators]
es6id: 12.1.1
---*/

var result;
var obj = {
  *g() {
    ({ get yield() { return 1 } });
  }
};

result = obj.g().next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);

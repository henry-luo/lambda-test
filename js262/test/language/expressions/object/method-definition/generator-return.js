

/*---
description: >
    `return` is a valid statement within generator function bodies.
features: [generators]
es6id: 14.4
---*/

var result;
var obj = {
  *g1() { return; },
  *g2() { return 1; }
};

result = obj.g1().next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);

result = obj.g2().next();
assert.sameValue(result.value, 1);
assert.sameValue(result.done, true);



/*---
description: >
  return is a valid statement within generator function bodies.
es6id: 14.4
features: [generators]
---*/

function* g1() { return; }
function* g2() { return 1; }

var result = g1().next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);

result = g2().next();
assert.sameValue(result.value, 1);
assert.sameValue(result.done, true);

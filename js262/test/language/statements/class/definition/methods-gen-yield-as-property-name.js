

/*---
description: >
    `yield` may be used as a literal property name in an object literal
    within generator function bodies.
features: [generators]
es6id: 12.1.1
---*/

var result;
class A {
  *g() {
    ({  yield: 1 });
  }
}

result = A.prototype.g().next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);

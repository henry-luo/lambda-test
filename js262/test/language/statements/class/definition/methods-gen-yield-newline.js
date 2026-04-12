

/*---
description: >
    Newlines terminate `yield` expressions.
features: [generators]
es6id: 14.4
---*/

var iter, result;
class A {
  *g() {
    yield
    1
  }
}

iter = A.prototype.g();

result = iter.next();
assert.sameValue(result.value, undefined, 'First result `value`');
assert.sameValue(result.done, false, 'First result `done` flag');

result = iter.next();
assert.sameValue(result.value, undefined, 'Second result `value`');
assert.sameValue(result.done, true, 'Second result `done` flag');

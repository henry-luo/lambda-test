

/*---
description: >
    `yield` expressions may be used as the right-hand-side of other `yield`
    expressions.
features: [generators]
es6id: 14.4
---*/

var iter, result;
class A {
  *g() {
    yield yield 1;
  }
}

iter = A.prototype.g();

result = iter.next();
assert.sameValue(result.value, 1, 'First result `value`');
assert.sameValue(result.done, false, 'First result `done` flag');

result = iter.next();
assert.sameValue(result.value, undefined, 'Second result `value`');
assert.sameValue(result.done, false, 'Second result `done` flag');

result = iter.next();
assert.sameValue(result.value, undefined, 'Third result `value`');
assert.sameValue(result.done, true, 'Thid result `done` flag');

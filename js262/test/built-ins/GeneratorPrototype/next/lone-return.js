

/*---
es6id: 25.2
description: >
    When a generator body contains a lone return statement, it should produce
    an iterator that immediately completes with the returned value.
features: [generators]
---*/

function* g() {
  return 23;
}
var iter = g();
var result;

result = iter.next();
assert.sameValue(result.value, 23, 'Result value');
assert.sameValue(result.done, true, 'Result `done` flag');



/*---
esid: sec-array.from
es6id: 22.1.2.1
description: Does not throw if this is null
---*/

var result = Array.from.call(null, []);

assert(result instanceof Array, 'The result of evaluating (result instanceof Array) is expected to be true');
assert.sameValue(result.length, 0, 'The value of result.length is expected to be 0');

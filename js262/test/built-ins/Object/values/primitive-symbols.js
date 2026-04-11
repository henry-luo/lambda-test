

/*---
esid: sec-object.values
description: Object.values accepts Symbol primitives.
author: Jordan Harband
features: [Symbol]
---*/

var result = Object.values(Symbol());

assert.sameValue(Array.isArray(result), true, 'result is an array');
assert.sameValue(result.length, 0, 'result has 0 items');

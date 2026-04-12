

/*---
info: The NaN is ReadOnly
es5id: 15.1.1.1_A2_T2
description: Checking typeof Functions
flags: [noStrict]
---*/


NaN = true;
assert.notSameValue(typeof(NaN), "boolean", 'The value of typeof(NaN) is not "boolean"');


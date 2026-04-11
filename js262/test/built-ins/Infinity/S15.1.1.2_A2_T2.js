

/*---
info: The Infinity is ReadOnly
es5id: 15.1.1.2_A2_T2
description: Checking typeof Functions
flags: [noStrict]
---*/


Infinity = true;
assert.notSameValue(typeof(Infinity), "boolean", 'The value of typeof(Infinity) is not "boolean"');


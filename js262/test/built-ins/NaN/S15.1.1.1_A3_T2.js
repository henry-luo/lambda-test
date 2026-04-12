

/*---
info: The NaN is DontDelete
es5id: 15.1.1.1_A3_T2
description: Use delete
flags: [noStrict]
---*/
assert.sameValue(delete NaN, false, 'The value of `delete NaN` is expected to be false');


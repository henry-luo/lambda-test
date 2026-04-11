

/*---
info: The Infinity is DontDelete
es5id: 15.1.1.2_A3_T2
description: Use delete
flags: [noStrict]
---*/
assert.sameValue(delete Infinity, false, 'The value of `delete Infinity` is expected to be false');


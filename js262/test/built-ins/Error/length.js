

/*---
info: The length property value is 1
es5id: 15.11.3_A2_T1
description: Checking length property
---*/

var err1 = Error("err");
assert.sameValue(err1.constructor.length, 1, 'The value of err1.constructor.length is 1');
assert.sameValue(Error.constructor.length, 1, 'The value of Error.constructor.length is 1');

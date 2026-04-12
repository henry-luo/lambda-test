

/*---
info: The length property of the call method is 1
es5id: 15.3.4.4_A2_T1
description: Checking Function.prototype.call.length
---*/
assert.sameValue(
  typeof Function.prototype.call,
  "function",
  'The value of `typeof Function.prototype.call` is expected to be "function"'
);

assert.notSameValue(
  typeof Function.prototype.call.length,
  "undefined",
  'The value of typeof Function.prototype.call.length is not "undefined"'
);

assert.sameValue(Function.prototype.call.length, 1, 'The value of Function.prototype.call.length is expected to be 1');

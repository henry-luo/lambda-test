

/*---
info: Function.prototype.apply has not prototype property
es5id: 15.3.4.3_A12
description: >
    Checking if obtaining the prototype property of
    Function.prototype.apply fails
---*/
assert.sameValue(
  Function.prototype.apply.prototype,
  undefined,
  'The value of Function.prototype.apply.prototype is expected to equal undefined'
);

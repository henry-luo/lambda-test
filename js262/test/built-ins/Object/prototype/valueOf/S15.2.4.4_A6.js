

/*---
info: Object.prototype.valueOf has not prototype property
es5id: 15.2.4.4_A6
description: >
    Checking if obtaining the prototype property of
    Object.prototype.valueOf fails
---*/
assert.sameValue(
  Object.prototype.valueOf.prototype,
  undefined,
  'The value of Object.prototype.valueOf.prototype is expected to equal undefined'
);

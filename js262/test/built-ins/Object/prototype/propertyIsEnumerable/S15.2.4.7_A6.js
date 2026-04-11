

/*---
info: Object.prototype.propertyIsEnumerable has not prototype property
es5id: 15.2.4.7_A6
description: >
    Checking if obtaining the prototype property of
    Object.prototype.propertyIsEnumerable fails
---*/
assert.sameValue(
  Object.prototype.propertyIsEnumerable.prototype,
  undefined,
  'The value of Object.prototype.propertyIsEnumerable.prototype is expected to equal undefined'
);

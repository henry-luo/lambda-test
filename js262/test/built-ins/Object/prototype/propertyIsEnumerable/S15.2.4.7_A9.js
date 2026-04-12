

/*---
info: |
    The Object.prototype.propertyIsEnumerable.length property does not have
    the attribute DontDelete
es5id: 15.2.4.7_A9
description: >
    Checking if deleting the
    Object.prototype.propertyIsEnumerable.length property fails
---*/
assert(
  !!Object.prototype.propertyIsEnumerable.hasOwnProperty('length'),
  'The value of !!Object.prototype.propertyIsEnumerable.hasOwnProperty("length") is expected to be true'
);

assert(
  !!delete Object.prototype.propertyIsEnumerable.length,
  'The value of !!delete Object.prototype.propertyIsEnumerable.length is expected to be true'
);


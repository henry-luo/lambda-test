

/*---
info: |
    The Function.prototype.call.length property does not have the attribute
    DontDelete
es5id: 15.3.4.4_A9
description: >
    Checking if deleting the Function.prototype.call.length property
    fails
---*/
assert(
  Function.prototype.call.hasOwnProperty('length'),
  'Function.prototype.call.hasOwnProperty(\'length\') must return true'
);

assert(
  delete Function.prototype.call.length,
  'The value of delete Function.prototype.call.length is expected to be true'
);

assert(
  !Function.prototype.call.hasOwnProperty('length'),
  'The value of !Function.prototype.call.hasOwnProperty(\'length\') is expected to be true'
);


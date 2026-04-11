

/*---
info: RegExp.prototype.exec has not prototype property
es5id: 15.10.6.2_A6
description: Checking RegExp.prototype.exec.prototype
---*/
assert.sameValue(
  RegExp.prototype.exec.prototype,
  undefined,
  'The value of RegExp.prototype.exec.prototype is expected to equal undefined'
);

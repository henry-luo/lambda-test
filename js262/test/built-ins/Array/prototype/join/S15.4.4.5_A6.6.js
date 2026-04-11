

/*---
info: The join property of Array has not prototype property
esid: sec-array.prototype.join
description: Checking Array.prototype.join.prototype
---*/

if (Array.prototype.join.prototype !== undefined) {
  throw new Test262Error('#1: Array.prototype.join.prototype === undefined. Actual: ' + (Array.prototype.join.prototype));
}



/*---
info: String.prototype.concat has not prototype property
es5id: 15.5.4.6_A6
description: Checking String.prototype.concat.prototype
---*/


if (String.prototype.concat.prototype !== undefined) {
  throw new Test262Error('#1: String.prototype.concat.prototype === undefined. Actual: ' + String.prototype.concat.prototype);
}


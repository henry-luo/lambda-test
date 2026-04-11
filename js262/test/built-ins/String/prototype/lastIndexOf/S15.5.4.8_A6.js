

/*---
info: String.prototype.lastIndexOf has not prototype property
es5id: 15.5.4.8_A6
description: Checking String.prototype.lastIndexOf.prototype
---*/


if (String.prototype.lastIndexOf.prototype !== undefined) {
  throw new Test262Error('#1: String.prototype.lastIndexOf.prototype === undefined. Actual: ' + String.prototype.lastIndexOf.prototype);
}


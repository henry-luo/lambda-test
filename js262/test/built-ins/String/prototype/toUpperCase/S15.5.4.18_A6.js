

/*---
info: String.prototype.toUpperCase has not prototype property
es5id: 15.5.4.18_A6
description: Checking String.prototype.toUpperCase.prototype
---*/


if (String.prototype.toUpperCase.prototype !== undefined) {
  throw new Test262Error('#1: String.prototype.toUpperCase.prototype === undefined. Actual: ' + String.prototype.toUpperCase.prototype);
}


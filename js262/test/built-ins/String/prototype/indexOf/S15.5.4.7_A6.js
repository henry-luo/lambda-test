

/*---
info: String.prototype.indexOf has not prototype property
es5id: 15.5.4.7_A6
description: Checking String.prototype.indexOf.prototype
---*/


if (String.prototype.indexOf.prototype !== undefined) {
  throw new Test262Error('#1: String.prototype.indexOf.prototype === undefined. Actual: ' + String.prototype.indexOf.prototype);
}




/*---
info: String.prototype.toLocaleUpperCase has not prototype property
es5id: 15.5.4.19_A6
description: Checking String.prototype.toLocaleUpperCase.prototype
---*/


if (String.prototype.toLocaleUpperCase.prototype !== undefined) {
  throw new Test262Error('#1: String.prototype.toLocaleUpperCase.prototype === undefined. Actual: ' + String.prototype.toLocaleUpperCase.prototype);
}




/*---
info: String.prototype.localeCompare has not prototype property
es5id: 15.5.4.9_A6
description: Checking String.prototype.localeCompare.prototype
---*/


if (String.prototype.localeCompare.prototype !== undefined) {
  throw new Test262Error('#1: String.prototype.localeCompare.prototype === undefined. Actual: ' + String.prototype.localeCompare.prototype);
}


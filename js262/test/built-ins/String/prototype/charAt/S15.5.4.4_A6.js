

/*---
info: String.prototype.charAt has not prototype property
es5id: 15.5.4.4_A6
description: Checking String.prototype.charAt.prototype
---*/


if (String.prototype.charAt.prototype !== undefined) {
  throw new Test262Error('#1: String.prototype.charAt.prototype === undefined. Actual: ' + String.prototype.charAt.prototype);
}


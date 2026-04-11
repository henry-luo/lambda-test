

/*---
info: String.prototype.toLowerCase has not prototype property
es5id: 15.5.4.16_A6
description: Checking String.prototype.toLowerCase.prototype
---*/


if (String.prototype.toLowerCase.prototype !== undefined) {
  throw new Test262Error('#1: String.prototype.toLowerCase.prototype === undefined. Actual: ' + String.prototype.toLowerCase.prototype);
}


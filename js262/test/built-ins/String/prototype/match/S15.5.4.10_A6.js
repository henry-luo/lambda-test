

/*---
info: String.prototype.match has not prototype property
es5id: 15.5.4.10_A6
description: Checking String.prototype.match.prototype
---*/


if (String.prototype.match.prototype !== undefined) {
  throw new Test262Error('#1: String.prototype.match.prototype === undefined. Actual: ' + String.prototype.match.prototype);
}


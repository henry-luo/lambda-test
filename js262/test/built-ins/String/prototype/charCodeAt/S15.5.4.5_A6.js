

/*---
info: String.prototype.charCodeAt has not prototype property
es5id: 15.5.4.5_A6
description: Checking String.prototype.charCodeAt.prototype
---*/


if (String.prototype.charCodeAt.prototype !== undefined) {
  throw new Test262Error('#1: String.prototype.charCodeAt.prototype === undefined. Actual: ' + String.prototype.charCodeAt.prototype);
}


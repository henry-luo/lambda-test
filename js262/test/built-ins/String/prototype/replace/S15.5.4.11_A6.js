

/*---
info: String.prototype.replace has not prototype property
es5id: 15.5.4.11_A6
description: Checking String.prototype.replace.prototype;
---*/


if (String.prototype.replace.prototype !== undefined) {
  throw new Test262Error('#1: String.prototype.replace.prototype === undefined. Actual: ' + String.prototype.replace.prototype);
}


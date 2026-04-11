

/*---
info: String.prototype.search has not prototype property
es5id: 15.5.4.12_A6
description: Checking String.prototype.search.prototype
---*/


if (String.prototype.search.prototype !== undefined) {
  throw new Test262Error('#1: String.prototype.search.prototype === undefined. Actual: ' + String.prototype.search.prototype);
}


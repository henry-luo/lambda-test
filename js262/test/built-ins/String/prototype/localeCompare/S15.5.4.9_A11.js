

/*---
info: The length property of the localeCompare method is 1
es5id: 15.5.4.9_A11
description: Checking String.prototype.localeCompare.length
---*/


if (!(String.prototype.localeCompare.hasOwnProperty("length"))) {
  throw new Test262Error('#1: String.prototype.localeCompare.hasOwnProperty("length") return true. Actual: ' + String.prototype.localeCompare.hasOwnProperty("length"));
}


if (String.prototype.localeCompare.length !== 1) {
  throw new Test262Error('#2: String.prototype.localeCompare.length === 1. Actual: ' + String.prototype.localeCompare.length);
}


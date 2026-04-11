

/*---
info: The length property of the lastIndexOf method is 1
es5id: 15.5.4.8_A11
description: Checking String.prototype.lastIndexOf.length
---*/


if (!(String.prototype.lastIndexOf.hasOwnProperty("length"))) {
  throw new Test262Error('#1: String.prototype.lastIndexOf.hasOwnProperty("length") return true. Actual: ' + String.prototype.lastIndexOf.hasOwnProperty("length"));
}


if (String.prototype.lastIndexOf.length !== 1) {
  throw new Test262Error('#2: String.prototype.lastIndexOf.length === 1. Actual: ' + String.prototype.lastIndexOf.length);
}


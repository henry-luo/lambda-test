

/*---
info: The length property of the charCodeAt method is 1
es5id: 15.5.4.5_A11
description: Checking String.prototype.charCodeAt.length
---*/


if (!(String.prototype.charCodeAt.hasOwnProperty("length"))) {
  throw new Test262Error('#1: String.prototype.charCodeAt.hasOwnProperty("length") return true. Actual: ' + String.prototype.charCodeAt.hasOwnProperty("length"));
}


if (String.prototype.charCodeAt.length !== 1) {
  throw new Test262Error('#2: String.prototype.charCodeAt.length === 1. Actual: ' + String.prototype.charCodeAt.length);
}




/*---
info: The length property of the toLocaleUpperCase method is 0
es5id: 15.5.4.19_A11
description: Checking String.prototype.toLocaleUpperCase.length
---*/


if (!(String.prototype.toLocaleUpperCase.hasOwnProperty("length"))) {
  throw new Test262Error('#1: String.prototype.toLocaleUpperCase.hasOwnProperty("length") return true. Actual: ' + String.prototype.toLocaleUpperCase.hasOwnProperty("length"));
}


if (String.prototype.toLocaleUpperCase.length !== 0) {
  throw new Test262Error('#2: String.prototype.toLocaleUpperCase.length === 0. Actual: ' + String.prototype.toLocaleUpperCase.length);
}


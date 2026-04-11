

/*---
info: The length property of the toLocaleLowerCase method is 0
es5id: 15.5.4.17_A11
description: Checking String.prototype.toLocaleLowerCase.length
---*/


if (!(String.prototype.toLocaleLowerCase.hasOwnProperty("length"))) {
  throw new Test262Error('#1: String.prototype.toLocaleLowerCase.hasOwnProperty("length") return true. Actual: ' + String.prototype.toLocaleLowerCase.hasOwnProperty("length"));
}


if (String.prototype.toLocaleLowerCase.length !== 0) {
  throw new Test262Error('#2: String.prototype.toLocaleLowerCase.length === 0. Actual: ' + String.prototype.toLocaleLowerCase.length);
}


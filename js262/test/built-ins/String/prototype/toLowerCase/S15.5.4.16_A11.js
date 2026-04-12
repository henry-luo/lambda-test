

/*---
info: The length property of the toLowerCase method is 0
es5id: 15.5.4.16_A11
description: Checking String.prototype.toLowerCase.length
---*/


if (!(String.prototype.toLowerCase.hasOwnProperty("length"))) {
  throw new Test262Error('#1: String.prototype.toLowerCase.hasOwnProperty("length") return true. Actual: ' + String.prototype.toLowerCase.hasOwnProperty("length"));
}


if (String.prototype.toLowerCase.length !== 0) {
  throw new Test262Error('#2: String.prototype.toLowerCase.length === 0. Actual: ' + String.prototype.toLowerCase.length);
}


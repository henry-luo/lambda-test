

/*---
info: |
    The initial value of String.prototype.constructor is the built-in String
    constructor
es5id: 15.5.4.1_A1_T1
description: Checking String.prototype.constructor
---*/


if (String.prototype.constructor !== String) {
  throw new Test262Error('#1: String.prototype.constructor === String. Actual: String.prototype.constructor ===' + String.prototype.constructor);
}


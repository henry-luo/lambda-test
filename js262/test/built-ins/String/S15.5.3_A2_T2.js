

/*---
info: |
    The value of the internal [[Prototype]] property of the String
    constructor is the Function prototype object
es5id: 15.5.3_A2_T2
description: Add custom property to Function.prototype and check it at String
---*/

Function.prototype.indicator = 1;


if (String.indicator !== 1) {
  throw new Test262Error('#1: Function.prototype.indicator = 1; String.indicator === 1. Actual: String.indicator ===' + String.indicator);
}


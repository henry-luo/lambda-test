

/*---
info: String.prototype.toLocaleUpperCase()
es5id: 15.5.4.19_A1_T8
description: Call toLocaleUpperCase() function of Infinity
---*/

Number.prototype.toLocaleUpperCase = String.prototype.toLocaleUpperCase;

if (Infinity.toLocaleUpperCase() !== "INFINITY") {
  throw new Test262Error('#1: Number.prototype.toLocaleUpperCase = String.prototype.toLocaleUpperCase; Infinity.toLocaleUpperCase()=== "INFINITY". Actual: ' + Infinity.toLocaleUpperCase());
}

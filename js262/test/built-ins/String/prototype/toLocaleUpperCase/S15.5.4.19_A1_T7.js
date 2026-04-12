

/*---
info: String.prototype.toLocaleUpperCase()
es5id: 15.5.4.19_A1_T7
description: Call toLocaleUpperCase() function of NaN
---*/

Number.prototype.toLocaleUpperCase = String.prototype.toLocaleUpperCase;


if (NaN.toLocaleUpperCase() !== "NAN") {
  throw new Test262Error('#1: Number.prototype.toLocaleUpperCase = String.prototype.toLocaleUpperCase; NaN.toLocaleUpperCase()=== "NAN". Actual: ' + NaN.toLocaleUpperCase());
}


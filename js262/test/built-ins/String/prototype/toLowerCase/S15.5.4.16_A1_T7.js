

/*---
info: String.prototype.toLowerCase()
es5id: 15.5.4.16_A1_T7
description: Call toLowerCase() function of NaN
---*/

Number.prototype.toLowerCase = String.prototype.toLowerCase;


if (NaN.toLowerCase() !== "nan") {
  throw new Test262Error('#1: Number.prototype.toLowerCase = String.prototype.toLowerCase; NaN.toLowerCase()=== "nan". Actual: ' + NaN.toLowerCase());
}


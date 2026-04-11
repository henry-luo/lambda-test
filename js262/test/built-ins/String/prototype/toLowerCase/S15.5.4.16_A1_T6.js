

/*---
info: String.prototype.toLowerCase()
es5id: 15.5.4.16_A1_T6
description: Call toLowerCase() function of Number.NEGATIVE_INFINITY
---*/

Number.prototype.toLowerCase = String.prototype.toLowerCase;


if ((Number.NEGATIVE_INFINITY).toLowerCase() !== "-infinity") {
  throw new Test262Error('#1: Number.prototype.toLowerCase = String.prototype.toLowerCase; (Number.NEGATIVE_INFINITY).toLowerCase() === "-infinity". Actual: ' + (Number.NEGATIVE_INFINITY).toLowerCase());
}




/*---
info: String.prototype.toUpperCase()
es5id: 15.5.4.18_A1_T6
description: Call toUpperCase() function of Number.NEGATIVE_INFINITY
---*/

Number.prototype.toUpperCase = String.prototype.toUpperCase;


if ((Number.NEGATIVE_INFINITY).toUpperCase() !== "-INFINITY") {
  throw new Test262Error('#1: Number.prototype.toUpperCase = String.prototype.toUpperCase; (Number.NEGATIVE_INFINITY).toUpperCase() === "-INFINITY". Actual: ' + (Number.NEGATIVE_INFINITY).toUpperCase());
}


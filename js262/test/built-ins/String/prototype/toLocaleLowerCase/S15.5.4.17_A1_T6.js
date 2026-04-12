

/*---
info: String.prototype.toLocaleLowerCase()
es5id: 15.5.4.17_A1_T6
description: Call toLocaleLowerCase() function of Number.NEGATIVE_INFINITY
---*/

Number.prototype.toLocaleLowerCase = String.prototype.toLocaleLowerCase;


if ((Number.NEGATIVE_INFINITY).toLocaleLowerCase() !== "-infinity") {
  throw new Test262Error('#1: Number.prototype.toLocaleLowerCase = String.prototype.toLocaleLowerCase; (Number.NEGATIVE_INFINITY).toLocaleLowerCase() === "-infinity". Actual: ' + (Number.NEGATIVE_INFINITY).toLocaleLowerCase());
}


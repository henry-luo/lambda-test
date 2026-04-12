

/*---
info: String.prototype.toLocaleLowerCase()
es5id: 15.5.4.17_A1_T8
description: Call toLocaleLowerCase() function of Infinity
---*/

Number.prototype.toLocaleLowerCase = String.prototype.toLocaleLowerCase;

if (Infinity.toLocaleLowerCase() !== "infinity") {
  throw new Test262Error('#1: Number.prototype.toLocaleLowerCase = String.prototype.toLocaleLowerCase; Infinity.toLocaleLowerCase()=== "infinity". Actual: ' + Infinity.toLocaleLowerCase());
}

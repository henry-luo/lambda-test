

/*---
info: If ToBoolean(x) is true, return y
es5id: 11.12_A4_T2
description: Type(y) and Type(z) are number primitives
---*/


if ((1 ? 0 : 1) !== 0) {
  throw new Test262Error('#1: (1 ? 0 : 1) === 0');
}


var y = new Number(1);
if ((1 ? y : 0) !== y) {
  throw new Test262Error('#2: (var y = new Number(1); (1 ? y : 0) === y');
}


var y = new Number(NaN);
if ((y ? y : 1) !== y) {
  throw new Test262Error('#3: (var y = new Number(NaN); (y ? y : 1) === y');
}



/*---
info: Result of number conversion from undefined value is NaN
es5id: 9.3_A1_T2
description: Undefined convert to Number by implicit transformation
---*/


if (isNaN(+(undefined)) !== true) {
  throw new Test262Error('#1: +(undefined) === Not-a-Number. Actual: ' + (+(undefined)));
}


if (isNaN(+(void 0)) !== true) {
  throw new Test262Error('#2: +(void 0) === Not-a-Number. Actual: ' + (+(void 0)));
}


if (isNaN(+(eval("var x"))) !== true) {
  throw new Test262Error('#3: +(eval("var x")) === Not-a-Number. Actual: ' + (+(eval("var x"))));
}

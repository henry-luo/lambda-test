

/*---
info: Operator --x returns ToNumber(x) - 1
es5id: 11.4.5_A4_T1
description: Type(x) is boolean primitive or Boolean object
---*/


var x = true;
if (--x !== 1 - 1) {
  throw new Test262Error('#1: var x = true; --x === 1 - 1. Actual: ' + (--x));
}


var x = new Boolean(false);
if (--x !== 0 - 1) {
  throw new Test262Error('#2: var x = new Boolean(false); --x === 0 - 1. Actual: ' + (--x));
}

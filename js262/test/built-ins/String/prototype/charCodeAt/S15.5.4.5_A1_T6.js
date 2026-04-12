

/*---
info: String.prototype.charCodeAt(pos)
es5id: 15.5.4.5_A1_T6
description: >
    Call charCodeAt() function with x argument of new String object,
    where x is undefined variable
---*/


if (new String("lego").charCodeAt(x) !== 0x6C) {
  throw new Test262Error('#1: var x; new String("lego").charCodeAt(x) === 0x6C. Actual: new String("lego").charCodeAt(x) ===' + new String("lego").charCodeAt(x));
}


var x;

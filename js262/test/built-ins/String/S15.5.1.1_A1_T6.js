

/*---
info: |
    When String is called as a function rather than as a constructor, it
    performs a type conversion
es5id: 15.5.1.1_A1_T6
description: Checking by using eval, Call String(eval());
---*/

var __str = String(eval());


if (typeof __str !== "string") {
  throw new Test262Error('#1: __str = String(eval()); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
}


if (__str !== "undefined") {
  throw new Test262Error('#2: __str = String(eval()); __str === "undefined". Actual: __str ===' + __str);
}


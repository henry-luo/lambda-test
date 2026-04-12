

/*---
info: |
    When String is called as a function rather than as a constructor, it
    performs a type conversion
es5id: 15.5.1.1_A1_T4
description: Call String(undefined)
---*/

var __str = String(undefined);


if (typeof __str !== "string") {
  throw new Test262Error('#1: __str = String(undefined); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
}


if (__str !== "undefined") {
  throw new Test262Error('#2: __str = String(undefined); __str === "undefined". Actual: __str ===' + __str);
}


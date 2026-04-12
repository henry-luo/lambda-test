

/*---
info: |
    When String is called as a function rather than as a constructor, it
    performs a type conversion
es5id: 15.5.1.1_A1_T7
description: Call String({})
---*/

var __str = String({});


if (typeof __str !== "string") {
  throw new Test262Error('#1: __str = String({}); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
}


if (__str !== "[object " + "Object" + "]") {
  throw new Test262Error('#2: __str = String({}); __str === "[object Object]". Actual: __str ===' + __str);
}


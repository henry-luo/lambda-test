

/*---
info: |
    If Result(3).type is normal and its completion value is empty,
    then return the value undefined
es5id: 15.1.2.1_A3.2_T3
description: Empty statement
---*/


if (eval(";") !== undefined) {
  throw new Test262Error('#1: eval(";") === undefined. Actual: ' + (eval(";")));
}

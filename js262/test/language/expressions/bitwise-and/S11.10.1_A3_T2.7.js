

/*---
info: Operator x & y returns ToNumber(x) & ToNumber(y)
es5id: 11.10.1_A3_T2.7
description: >
    Type(x) is different from Type(y) and both types vary between
    String (primitive or object) and Null
---*/


if (("1" & null) !== 0) {
  throw new Test262Error('#1: ("1" & null) === 0. Actual: ' + (("1" & null)));
}


if ((null & "1") !== 0) {
  throw new Test262Error('#2: (null & "1") === 0. Actual: ' + ((null & "1")));
}


if ((new String("1") & null) !== 0) {
  throw new Test262Error('#3: (new String("1") & null) === 0. Actual: ' + ((new String("1") & null)));
}


if ((null & new String("1")) !== 0) {
  throw new Test262Error('#4: (null & new String("1")) === 0. Actual: ' + ((null & new String("1"))));
}

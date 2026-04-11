

/*---
info: |
    If Result(3).type is normal and its completion value is a value V,
    then return the value V
es5id: 15.1.2.1_A3.1_T1
description: Expression statement. Eval return primitive value
---*/

var x;

if (eval("x = 1") !== 1) {
  throw new Test262Error('#1: eval("x = 1") === 1. Actual: ' + (eval("x = 1")));
}


if (eval("1") !== 1) {
  throw new Test262Error('#2: eval("1") === 1. Actual: ' + (eval("1")));
}


if (eval("'1'") !== '1') {
  throw new Test262Error('#3: eval("\'1\'") === \'1\'. Actual: ' + (eval("'1'")));
}


x = 1;
if (eval("++x") !== 2) {
  throw new Test262Error('#4: x = 1; eval("++x") === 2. Actual: ' + (x));
}

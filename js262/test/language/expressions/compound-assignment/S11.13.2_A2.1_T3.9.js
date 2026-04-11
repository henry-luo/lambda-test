

/*---
info: Operator uses GetValue
es5id: 11.13.2_A2.1_T3.9
description: >
    If GetBase(LeftHandSideExpression) is null, throw ReferenceError.
    Check operator is "x &= y"
---*/


try {
  var z = (x &= 1);
  throw new Test262Error('#1.1: x &= 1 throw ReferenceError. Actual: ' + (z));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#1.2: x &= 1 throw ReferenceError. Actual: ' + (e));  
  }
}

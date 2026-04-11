

/*---
info: Operator uses GetValue
es5id: 11.13.2_A2.1_T2.4
description: >
    If GetBase(AssigmentExpression) is null, throw ReferenceError.
    Check operator is "x += y"
---*/


try {
  var x = 1;
  var z = (x += y);
  throw new Test262Error('#1.1: var x = 1; x += y throw ReferenceError. Actual: ' + (z));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#1.2: var x = 1; x += y throw ReferenceError. Actual: ' + (e));  
  }
}

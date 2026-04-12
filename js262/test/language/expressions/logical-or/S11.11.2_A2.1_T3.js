

/*---
info: Operator x || y uses GetValue
es5id: 11.11.2_A2.1_T3
description: >
    If ToBoolean(x) is false and GetBase(y) is null, throw
    ReferenceError
---*/


try {
  false || y;
  throw new Test262Error('#1.1: false || y throw ReferenceError. Actual: ' + (false || y));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#1.2: false || y throw ReferenceError. Actual: ' + (e));  
  }
}

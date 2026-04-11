

/*---
info: Operator x && y uses GetValue
es5id: 11.11.1_A2.1_T2
description: If GetBase(x) is null, throw ReferenceError
---*/


try {
  x && true;
  throw new Test262Error('#1.1: x && true throw ReferenceError. Actual: ' + (x && true));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#1.2: x && true throw ReferenceError. Actual: ' + (e));  
  }
}

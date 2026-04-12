

/*---
info: "Operator x ? y : z uses GetValue"
es5id: 11.12_A2.1_T2
description: If GetBase(x) is null, throw ReferenceError
---*/


try {
  x ? true : false;
  throw new Test262Error('#1.1: x ? true : false throw ReferenceError. Actual: ' + (x ? true : false));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#1.2: x ? true : false throw ReferenceError. Actual: ' + (e));  
  }
}

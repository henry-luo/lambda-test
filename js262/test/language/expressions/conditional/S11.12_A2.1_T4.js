

/*---
info: "Operator x ? y : z uses GetValue"
es5id: 11.12_A2.1_T4
description: >
    If ToBoolean(x) is false and GetBase(z) is null, throw
    ReferenceError
---*/


try {
  false ? true : z;
  throw new Test262Error('#1.1: false ? true : z throw ReferenceError. Actual: ' + (false ? true : z));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#1.2: false ? true : z throw ReferenceError. Actual: ' + (e));  
  }
}



/*---
info: Operator +x uses GetValue
es5id: 11.4.6_A2.1_T2
description: If GetBase(x) is null, throw ReferenceError
---*/


try {
  +x;
  throw new Test262Error('#1.1: +x throw ReferenceError. Actual: ' + (+x));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#1.2: +x throw ReferenceError. Actual: ' + (e));  
  }
}

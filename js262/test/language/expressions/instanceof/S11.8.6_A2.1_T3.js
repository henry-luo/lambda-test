

/*---
info: Operator "instanceof" uses GetValue
es5id: 11.8.6_A2.1_T3
description: If GetBase(ShiftExpression) is null, throw ReferenceError
---*/


try {
  ({}) instanceof OBJECT;
  throw new Test262Error('#1.1: ({}) instanceof OBJECT throw ReferenceError. Actual: ' + (({}) instanceof OBJECT));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#1.2: ({}) instanceof OBJECT throw ReferenceError. Actual: ' + (e));  
  }
}

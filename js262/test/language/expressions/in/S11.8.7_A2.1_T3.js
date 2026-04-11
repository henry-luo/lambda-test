

/*---
info: Operator "in" uses GetValue
es5id: 11.8.7_A2.1_T3
description: If GetBase(ShiftExpression) is null, throw ReferenceError
---*/


try {
  "MAX_VALUE" in NUMBER;
  throw new Test262Error('#1.1: "MAX_VALUE" in NUMBER throw ReferenceError. Actual: ' + ("MAX_VALUE" in NUMBER));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#1.2: "MAX_VALUE" in NUMBER throw ReferenceError. Actual: ' + (e));  
  }
}

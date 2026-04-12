

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.8.7_A2.4_T3
description: Checking with undeclarated variables
---*/


try {
  max_value in (max_value = "MAX_VALUE", Number);
  throw new Test262Error('#1.1: max_value in (max_value = "MAX_VALUE", Number) throw ReferenceError. Actual: ' + (max_value in (max_value = "MAX_VALUE", Number)));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#1.2: max_value in (max_value = "MAX_VALUE", Number) throw ReferenceError. Actual: ' + (e));  
  }
}

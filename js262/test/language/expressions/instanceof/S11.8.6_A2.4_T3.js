

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.8.6_A2.4_T3
description: Checking with undeclarated variables
---*/


try {
  object instanceof (object = {}, Object);
  throw new Test262Error('#1.1: object instanceof (object = {}, Object) throw ReferenceError. Actual: ' + (object instanceof (object = {}, Object)));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#1.2: object instanceof (object = {}, Object) throw ReferenceError. Actual: ' + (e));  
  }
}



/*---
info: "CallExpression : MemberExpression Arguments uses GetValue"
es5id: 11.2.3_A2
description: If GetBase(MemberExpression) is null, throw ReferenceError
---*/


try {
  x();
  throw new Test262Error('#1.1: x() throw ReferenceError. Actual: ' + (x()));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#1.2: x() throw ReferenceError. Actual: ' + (e));  
  }
}


try {
  x(1,2,3);
  throw new Test262Error('#2.1: x(1,2,3) throw ReferenceError. Actual: ' + (x(1,2,3))); 
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#2.2: x(1,2,3) throw ReferenceError. Actual: ' + (e)); 
  }
}

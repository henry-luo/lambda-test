

/*---
info: MemberExpression and CallExpression uses GetValue
es5id: 11.2.1_A2
description: >
    If GetBase(MemberExpression or CallExpression) is null, throw
    ReferenceError
---*/


try {
  object[1];
  throw new Test262Error('#1.1: object[1] throw ReferenceError. Actual: ' + (object[1]));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#1.2: object[1] throw ReferenceError. Actual: ' + (e));  
  }
}


try {
  object.prop;
  throw new Test262Error('#2.1: object.prop throw ReferenceError. Actual: ' + (object.prop)); 
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#2.2: object.prop throw ReferenceError. Actual: ' + (e)); 
  }
}

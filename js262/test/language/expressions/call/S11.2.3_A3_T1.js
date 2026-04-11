

/*---
info: If MemberExpression is not Object, throw TypeError
es5id: 11.2.3_A3_T1
description: Checking "boolean primitive" case
---*/


try {
  true();
    throw new Test262Error('#1.1: true() throw TypeError. Actual: ' + (true()));	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#1.2: true() throw TypeError. Actual: ' + (e));	
  }
}


try {
  var x = true;
  x();
    throw new Test262Error('#2.1: var x = true; x() throw TypeError. Actual: ' + (x()))
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#2.2: var x = true; x() throw TypeError. Actual: ' + (e))  
  }
}

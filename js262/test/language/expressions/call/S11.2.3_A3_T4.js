

/*---
info: If MemberExpression is not Object, throw TypeError
es5id: 11.2.3_A3_T4
description: Checking "undefined" case
---*/


try {
  undefined();
    throw new Test262Error('#1.1: undefined() throw TypeError. Actual: ' + (e));	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#1.2: undefined() throw TypeError. Actual: ' + (e));	
  }
}


try {
  var x = undefined;
  x();
    throw new Test262Error('#2.1: var x = undefined; x() throw TypeError. Actual: ' + (e));	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#2.2: var x = undefined; x() throw TypeError. Actual: ' + (e));	
  }
}



/*---
info: |
    If Type(NewExpression) or Type(MemberExpression) is not Object, throw
    TypeError
es5id: 11.2.2_A3_T4
description: Checking "undefined" case
---*/


try {
  new undefined;
  throw new Test262Error('#1: new undefined throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#1: new undefined throw TypeError');	
  }
}


try {
  var x = undefined;
  new x;
  throw new Test262Error('#2: var x = undefined; new x throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#2: var x = undefined; new x throw TypeError');	
  }
}


try {
  var x = undefined;
  new x();
  throw new Test262Error('#3: var x = undefined; new x() throw TypeError'); 
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#3: var x = undefined; new x() throw TypeError'); 
  }
}

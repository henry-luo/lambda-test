

/*---
info: |
    If Type(NewExpression) or Type(MemberExpression) is not Object, throw
    TypeError
es5id: 11.2.2_A3_T5
description: Checking "null primitive" case
---*/


try {
  new null;
  throw new Test262Error('#1: new null throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#1: new null throw TypeError');	
  }
}


try {
  var x = null;
  new x;
  throw new Test262Error('#2: var x = null; new x throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#2: var x = null; new x throw TypeError');	
  }
}


try {
  var x = null;
  new x();
  throw new Test262Error('#3: var x = null; new x() throw TypeError'); 
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#3: var x = null; new x() throw TypeError'); 
  }
}

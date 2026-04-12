

/*---
info: |
    If Type(NewExpression) or Type(MemberExpression) is not Object, throw
    TypeError
es5id: 11.2.2_A3_T1
description: Checking boolean primitive case
---*/


try {
  new true;
  throw new Test262Error('#1: new true throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#1: new true throw TypeError');	
  }
}


try {
  var x = true;
  new x;
  throw new Test262Error('#2: var x = true; new x throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#2: var x = true; new x throw TypeError');	
  }
}


try {
  var x = true;
  new x();
  throw new Test262Error('#3: var x = true; new x() throw TypeError');  
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#3: var x = true; new x() throw TypeError');  
  }
}

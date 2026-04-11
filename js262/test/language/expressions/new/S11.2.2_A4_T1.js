

/*---
info: |
    If NewExpression or MemberExpression does not implement internal
    [[Construct]] method, throw TypeError
es5id: 11.2.2_A4_T1
description: Checking Boolean object case
---*/


try {
  new new Boolean(true);
  throw new Test262Error('#1: new new Boolean(true) throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#1: new new Boolean(true) throw TypeError');	
  }
}


try {
  var x = new Boolean(true);
  new x;
  throw new Test262Error('#2: var x = new Boolean(true); new x throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#2: var x = new Boolean(true); new x throw TypeError');	
  }
}


try {
  var x = new Boolean(true);
  new x();
  throw new Test262Error('#3: var x = new Boolean(true); new x() throw TypeError');  
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#3: var x = new Boolean(true); new x() throw TypeError');  
  }
}

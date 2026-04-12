

/*---
info: |
    If NewExpression or MemberExpression does not implement internal
    [[Construct]] method, throw TypeError
es5id: 11.2.2_A4_T5
description: Checking Math object case
---*/


try {
  new Math;
  throw new Test262Error('#1: new Math throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#1: new Math throw TypeError');	
  }
}


try {
  new new Math();
  throw new Test262Error('#2: new new Math() throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#2: new new Math() throw TypeError');	
  }
}


try {
  var x = new Math();
  new x();
  throw new Test262Error('#3: var x = new Math(); new x() throw TypeError'); 
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#3: var x = new Math(); new x() throw TypeError'); 
  }
}

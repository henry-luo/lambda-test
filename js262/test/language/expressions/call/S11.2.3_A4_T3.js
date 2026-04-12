

/*---
info: |
    If MemberExpression does not implement the internal [[Call]] method,
    throw TypeError
es5id: 11.2.3_A4_T3
description: Checking String object case
---*/


try {
  new String("1")();
  throw new Test262Error('#1.1: new String("1")() throw TypeError. Actual: ' + (new String("1")()));	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#1.2: new String("1")() throw TypeError. Actual: ' + (e));	
  }
}


try {
  var x = new String("1");
  x();
  throw new Test262Error('#2.1: var x = new String("1"); x() throw TypeError. Actual: ' + (x()));	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#2.2: var x = new String("1"); x() throw TypeError. Actual: ' + (e));	
  }
}



/*---
info: |
    If MemberExpression does not implement the internal [[Call]] method,
    throw TypeError
es5id: 11.2.3_A4_T5
description: Checking Math object case
---*/


try {
  Math();
  throw new Test262Error('#1.1: Math() throw TypeError. Actual: ' + (Math()));	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#1.2: Math() throw TypeError. Actual: ' + (e));	
  }
}

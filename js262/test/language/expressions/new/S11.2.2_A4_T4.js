

/*---
info: |
    If NewExpression or MemberExpression does not implement internal
    [[Construct]] method, throw TypeError
es5id: 11.2.2_A4_T4
description: Checking Global object case
---*/


try {
  new this;
  throw new Test262Error('#1: new this throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#1: new this throw TypeError');	
  }
}


try {
  new this();
  throw new Test262Error('#2: new this() throw TypeError'); 
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#2: new this() throw TypeError'); 
  }
}

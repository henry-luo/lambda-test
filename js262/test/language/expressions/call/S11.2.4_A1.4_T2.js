

/*---
info: "Arguments : (ArgumentList : ArgumentList, AssignmentExpression)"
es5id: 11.2.4_A1.4_T2
description: >
    Return an internal list whose length is one greater than the
    length of ArgumentList and whose items are the items of
    ArgumentList, in order,  followed at the end by
    GetValue(AssignmentExpression), which is the last item of  the new
    list
---*/

function f_arg() {
}


try {
  f_arg(x,x=1);
  throw new Test262Error('#1.1: function f_arg() {} f_arg(x,x=1) throw ReferenceError. Actual: ' + (f_arg(x,x=1)));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#1.2: function f_arg() {} f_arg(x,x=1) throw ReferenceError. Actual: ' + (e));  
  }
}

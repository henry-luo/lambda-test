

/*---
info: |
    Arguments : (ArgumentList : ArgumentList,, AssignmentExpression) is a bad
    syntax
es5id: 11.2.4_A1.3_T1
description: incorrect syntax
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function f_arg() {
}

f_arg(1,,2);

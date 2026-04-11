

/*---
info: "{} within the \"if\" expression is not allowed"
es5id: 12.5_A11
description: Checking if execution of "if({1})" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


if({1})
  {
    ;
  }else
  {
    ;
  }


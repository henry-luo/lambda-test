

/*---
info: |
    An ExpressionStatement can not start with the function keyword because
    that might make it ambiguous with a FunctionDeclaration
es5id: 12.4_A1
description: Checking if execution of "function(){}()" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


function(){}();


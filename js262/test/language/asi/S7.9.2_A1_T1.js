

/*---
info: Check examples for automatic semicolon insertion from the standard
es5id: 7.9.2_A1_T1
description: "{ 1 2 } 3 is not a valid sentence in the ECMAScript grammar"
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


{ 1 2 } 3

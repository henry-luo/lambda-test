

/*---
info: "HexIntegerLiteral :: 0(x/X) is incorrect"
es5id: 7.8.3_A6.1_T1
description: Checking if execution of "0x" passes
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


0x



/*---
info: Check examples for automatic semicolon insertion from the standard
es5id: 7.9.2_A1_T3
description: for( a ; b \n ) is not a valid sentence in the ECMAScript grammar
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


for( a ; b
)

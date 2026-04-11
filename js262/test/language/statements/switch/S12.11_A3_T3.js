

/*---
info: Syntax constructions of switch statement
es5id: 12.11_A3_T3
description: Checking if execution of "switch(value)" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

switch(value);

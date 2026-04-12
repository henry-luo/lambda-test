

/*---
info: The FunctionBody must be SourceElements
es5id: 13_A7_T3
description: Checking if execution of "function __func(){\A\B\C}" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function __func(){\A\B\C};



/*---
info: The FunctionBody must be SourceElements
es5id: 13_A7_T2
description: >
    Inserting elements that is different from SourceElements into the
    FunctionBody
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function __func(){&1}

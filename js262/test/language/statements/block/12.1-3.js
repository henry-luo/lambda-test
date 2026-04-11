

/*---
es5id: 12.1-3
description: "12.1 - block '{ StatementListopt };' is not allowed: try-finally"
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

try{};finally{}

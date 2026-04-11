

/*---
es5id: 12.1-1
description: "12.1 - block '{ StatementListopt };' is not allowed: try-catch"
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

try{};catch(){}

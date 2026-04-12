

/*---
es5id: 12.1-4
description: "12.1 - block '{ StatementListopt };' is not allowed: if-else"
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

if{};else{}

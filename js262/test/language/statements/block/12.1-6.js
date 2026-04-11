

/*---
es5id: 12.1-6
description: >
    12.1 - block '{ StatementListopt };' is not allowed:
    if-else-if-else
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

if{};else if{};else{}

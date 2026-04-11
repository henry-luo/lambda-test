

/*---
es5id: 12.1-7
description: "12.1 - block '{ StatementListopt };' is not allowed: do-while"
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

do{};while()



/*---
es5id: 13.0-1
description: >
    13.0 - multiple names in one function declaration is not allowed,
    two function names
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function x, y() {}

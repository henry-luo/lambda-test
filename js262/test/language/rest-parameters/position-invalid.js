

/*---
es6id: 14.1
description: >
    Rest parameter cannot be followed by another named parameter
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
function f(a, ...b, c) {}

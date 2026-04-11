

/*---
es5id: 13.0-3
description: >
    13.0 - property names in function definition is not allowed, add a
    new property into object
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function obj.tt() {}

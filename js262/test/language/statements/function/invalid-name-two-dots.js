

/*---
es5id: 13.0-4
description: >
    13.0 - multiple names in one function declaration is not allowed,
    add a new property into a property which is a object
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function obj.tt.ss() {}

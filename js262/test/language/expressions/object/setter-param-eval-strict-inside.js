

/*---
es5id: 11.1.5-3-s
description: >
    Strict Mode - SyntaxError is thrown when  'evals'  occurs as the
    Identifier in a PropertySetParameterList of a PropertyAssignment
    if its FunctionBody is strict code
negative:
  phase: parse
  type: SyntaxError
flags: [noStrict]
---*/

$DONOTEVALUATE();

void {
  set x(eval) {
    "use strict";
  }
};

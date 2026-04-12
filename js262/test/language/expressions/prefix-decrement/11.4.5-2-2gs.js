

/*---
es5id: 11.4.5-2-2gs
description: >
    Strict Mode - SyntaxError is throw if the UnaryExpression operated
    upon by a Prefix Decrement operator(--arguments)
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

--arguments;

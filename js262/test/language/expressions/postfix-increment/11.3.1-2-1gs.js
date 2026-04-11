

/*---
es5id: 11.3.1-2-1gs
description: >
    Strict Mode - SyntaxError is throw if the identifier arguments
    appear as a PostfixExpression(arguments++)
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

arguments++;



/*---
es5id: 13.1-11-s
description: >
    StrictMode - SyntaxError is thrown if 'eval' occurs as the
    function name of a FunctionDeclaration in strict mode
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

function eval() { }

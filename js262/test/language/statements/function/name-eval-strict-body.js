

/*---
es5id: 13.1-36-s
description: >
    StrictMode - SyntaxError is thrown if 'eval' occurs as the
    function name of a FunctionDeclaration whose FunctionBody is in
    strict mode
negative:
  phase: parse
  type: SyntaxError
flags: [noStrict]
---*/

$DONOTEVALUATE();

function eval() { 'use strict'; }

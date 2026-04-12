

/*---
es6id: 13.1
description: >
    Redeclaration error within strict mode function inside non-strict code.
negative:
  phase: parse
  type: SyntaxError
flags: [noStrict]
---*/

$DONOTEVALUATE();
(function() { 'use strict'; { const f = 1; var f; } })


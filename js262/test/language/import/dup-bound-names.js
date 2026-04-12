

/*---
es6id: 15.2.1.1
description: >
    It is a Syntax Error if the BoundNames of ImportDeclaration contains any
    duplicate entries.
flags: [module]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

import { x, y as x } from 'z';

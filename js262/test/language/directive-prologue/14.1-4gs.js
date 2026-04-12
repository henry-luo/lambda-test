

/*---
es5id: 14.1-4gs
description: >
    StrictMode - a Use Strict Directive followed by a strict mode
    violation
negative:
  phase: parse
  type: SyntaxError
flags: [raw]
---*/

"use strict";
throw "Test262: This statement should not be evaluated.";
eval = 42;

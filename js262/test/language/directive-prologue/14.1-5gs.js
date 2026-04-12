

/*---
es5id: 14.1-5gs
description: >
    StrictMode - a Use Strict Directive embedded in a directive
    prologue followed by a strict mode violation
negative:
  phase: parse
  type: SyntaxError
flags: [raw]
---*/

"a";
"use strict";
"c";
throw "Test262: This statement should not be evaluated.";
eval = 42;

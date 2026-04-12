

/*---
es5id: 10.1.1-5gs
description: >
    Strict Mode - Use Strict Directive Prologue is ''use strict';'
    which appears at the start of the code
negative:
  phase: parse
  type: SyntaxError
flags: [raw]
---*/

"use strict";
throw "Test262: This statement should not be evaluated.";
var public = 1;

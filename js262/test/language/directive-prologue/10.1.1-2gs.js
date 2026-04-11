

/*---
es5id: 10.1.1-2gs
description: >
    Strict Mode - Use Strict Directive Prologue is ''use strict''
    which lost the last character ';'
negative:
  phase: parse
  type: SyntaxError
flags: [raw]
---*/

"use strict"
throw "Test262: This statement should not be evaluated.";
var public = 1;

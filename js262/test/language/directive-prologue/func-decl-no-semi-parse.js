

/*---
esid: use-strict-directive
es5id: 10.1.1-2-s
description: >
    Strict Mode - Use Strict Directive Prologue is ''use strict''
    which lost the last character ';'
negative:
  phase: parse
  type: SyntaxError
flags: [noStrict]
---*/

$DONOTEVALUATE();

function fun() {
  "use strict"
  var static;
}



/*---
esid: sec-labelled-statements
es6id: 13.13
description: >
    function declarations in statement position in strict mode:
    label: Statement
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

label: function g() {}

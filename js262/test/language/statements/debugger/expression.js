

/*---
description: The `debugger` token may not occupy an expression position
esid: sec-debugger-statement
es6id: 13.16
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

(debugger);

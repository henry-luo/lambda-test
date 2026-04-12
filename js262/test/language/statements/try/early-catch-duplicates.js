

/*---
esid: sec-try-statement-static-semantics-early-errors
es6id: 13.15.1
description: >
    It is a Syntax Error if BoundNames of CatchParameter contains any duplicate
    elements.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

try { } catch ([x, x]) {}

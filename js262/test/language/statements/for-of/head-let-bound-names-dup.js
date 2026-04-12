

/*---
description: The head's declaration may not contain duplicate entries
negative:
  phase: parse
  type: SyntaxError
info: |
    It is a Syntax Error if the BoundNames of ForDeclaration contains any
    duplicate entries.
esid: sec-for-in-and-for-of-statements-static-semantics-early-errors
es6id: 13.7.5
---*/

$DONOTEVALUATE();

for (let [x, x] of []) {}
